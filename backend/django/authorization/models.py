from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, company_id, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(company_id, email, user_name, first_name, password, **other_fields)

    def create_user(self, company_id, email, user_name, first_name, password, **other_fields):

        if not company_id:
            raise ValueError('You must provide you employee identification.')
        if not email:
            raise ValueError('You must provide an email address.')

        email = self.normalize_email(email)
        user = self.model(company_id=company_id, email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    company_id = models.IntegerField(primary_key=True)
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'company_id'
    REQUIRED_FIELDS = ['email', 'user_name', 'first_name']

    def __str__(self):
        return self.first_name

    objects = CustomAccountManager()

