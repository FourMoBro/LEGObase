from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CustomUserCreate, BlacklistTokenUpdateView

urlpatterns = [
    path('token/obtain/', TokenObtainPairView.as_view(), name='token_obtain'),  # override sjwt stock token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', CustomUserCreate.as_view(), name='register'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
]