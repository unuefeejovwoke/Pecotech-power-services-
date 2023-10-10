from django.urls import path
from . import views
from .views import PasswordsChangeView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('register/', views.registration_view, name='register'),
    path('logout/', views.custom_logout, name='logout'),
    path('dashboard/', views.dashboard, name='dashboard'),

    #edit profile
    path('profile/edit/', views.edit_profile, name='edit_profile'),
    #change password
    path('password_change/', PasswordsChangeView.as_view(template_name='accounts/password_change.html'), name='password_change'),
]