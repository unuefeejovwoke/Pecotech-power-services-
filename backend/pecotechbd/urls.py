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


    #pages
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('blog/', views.blog, name='blog'),
    path('contact/', views.contact, name='contact'),
]