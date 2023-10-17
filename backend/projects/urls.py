from django.urls import path
from . import views

urlpatterns = [
    path('<int:user_id>/', views.recent_updates, name='recent_updates'),
]