
from django.shortcuts import render
from .models import Projects

def recent_updates(request, user_id):
    # Retrieve recent updates for the user
    recent_updates = Projects.objects.filter(user_id=user_id).order_by('-date')[:5]

    return render(request, 'accounts/profile.html', {'recent_updates': recent_updates})
