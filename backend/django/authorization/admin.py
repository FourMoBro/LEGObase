from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea


class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('company_id','email', 'user_name', )
    list_filter = ('company_id','email', 'is_active', 'is_staff')
    ordering = ('-created_at',)
    list_display = ('company_id','email', 'user_name',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('company_id','email', 'user_name', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('company_id','email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(User, UserAdminConfig)