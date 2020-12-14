from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from authorization.models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    user = User
    @classmethod
    def get_token(cls, user):

        token = super().get_token(user)

        # Add custom claims
        if user.is_staff:
            token['role'] = "admin"
        else:
            token['role'] = "user"
        # ...

        return token

class RegisterUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    company_id = serializers.IntegerField(required=True)
    
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'company_id', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance