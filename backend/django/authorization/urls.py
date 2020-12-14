from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CustomUserCreate, BlacklistTokenUpdateView, MyObtainTokenPairView

urlpatterns = [
    path('token/obtain/', MyObtainTokenPairView.as_view(), name='token_obtain'),  # override sjwt stock token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', CustomUserCreate.as_view(), name='register'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
]