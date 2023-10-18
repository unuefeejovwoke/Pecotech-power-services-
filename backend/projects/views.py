
from django.shortcuts import render
from .models import Projects
from .models import ServiceRequest
from django.contrib.auth.decorators import login_required

def recent_updates(request, user_id):
    # Retrieve recent updates for the user
    recent_updates = Projects.objects.filter(user_id=user_id).order_by('-date')[:5]

    return render(request, 'accounts/profile.html', {'recent_updates': recent_updates})


@login_required
def service_request_list(request):
    service_requests = ServiceRequest.objects.filter(user=request.user).order_by('-submission_date')

    context = {
        'service_requests': service_requests
    }

    return render(request, 'accounts/profile.html', context)
