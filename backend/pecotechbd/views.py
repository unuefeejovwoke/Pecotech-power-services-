from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from django.core.mail import send_mail
from django.conf import settings

from django.contrib.auth.views import PasswordChangeView
from django.urls import reverse_lazy
from projects.models import Projects, ServiceRequest
from projects.forms import ServiceRequestForm
from django.contrib import messages
from .forms import UserProfileForm, UserEditForm, CustomPasswordChangeForm
 
import smtplib
from django.core.mail import EmailMessage
from .models import UserProfile


from django.http import HttpResponse
from .forms import UserRegisterForm


# Create your views here.
def home(request):
    return render(request , 'home.html')

def login_view(request):
    # if request.user.is_authenticated:
    #     return redirect("dashboard")
    if request.method == 'POST':
        print("hi")
        email = request.POST.get('email')  # Use get() to avoid MultiValueDictKeyError
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
    
        if user is not None:
            print("happy")
            login(request, user)
            # send a response if authenticated 
            return HttpResponse("ok")
        else:
            pass
        

    # Handle failed login or display login form
    return render(request, 'accounts/auth.html')


def registration_view(request):
    form = UserRegisterForm()
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()

            # Create a UserProfile instance for the user
            user_profile = UserProfile(user=user)
            user_profile.save()

            # Send a welcome email to the user
            subject = 'Welcome to Your Website'
            message = 'Thank you for registering on Your Website. We are excited to have you!'
            from_email = 'seu7.tech@gmail.com'
            recipient_list = [user.email]

            try:
                email = EmailMessage(subject, message, from_email, recipient_list)
                email.send()
                messages.success(request, 'Your account was created successfully, and a welcome email has been sent.')
            except smtplib.SMTPException as e:
                messages.error(request, 'There was an error sending the welcome email. Please contact support.')

            return redirect("login")
    return render(request, 'accounts/auth.html', {"register": "register", "form": form})

def custom_logout(request):
    # Logout the user
    logout(request)

    messages.success(request, 'You have been successfully logged out.')
    return redirect('login')

@login_required
def dashboard(request):
    user_profile = UserProfile.objects.get(user=request.user)
    profile_picture = user_profile.profile_picture
    recent_updates = Projects.objects.filter(user=request.user).order_by('-date')[:5]
    service_requests = ServiceRequest.objects.filter(user=request.user).order_by('-submission_date')

    if request.method == 'POST':
        form = ServiceRequestForm(request.POST, request.FILES)
        if form.is_valid():
            service_request = form.save(commit=False)
            service_request.user = request.user
            service_request.save()

            # Send an email notification to the admin
            subject = "New Service Request"
            message = f"User {request.user.username} has sent a new service request. Please review it."
            from_email = settings.DEFAULT_FROM_EMAIL
            recipient_list = ['seu7.tech@gmail.com']  # Admin's email address
            send_mail(subject, message, from_email, recipient_list, fail_silently=True)

            messages.success(request, "Your Request Has Been Sent, You Will Receive An Email Soon.")
            return redirect("dashboard")

    else:
        form = ServiceRequestForm()

    return render(request, 'accounts/profile.html', {'profile_picture': profile_picture, 'recent_updates': recent_updates, 'form': form, 'service_requests': service_requests})


@login_required
def edit_profile(request):
    user_profile = UserProfile.objects.get(user=request.user)
    profile_picture = user_profile.profile_picture

    user_form = UserEditForm(instance=request.user)
    profile_form = UserProfileForm(instance=request.user.userprofile)
   

    if request.method == "POST":
        if "profile_submit" in request.POST:
            # Handle profile editing
            user_form = UserEditForm(request.POST, instance=request.user)
            profile_form = UserProfileForm(request.POST, request.FILES, instance=request.user.userprofile)
            if user_form.is_valid() and profile_form.is_valid():
                user_form.save()
                profile_form.save()
                messages.success(request, "Profile updated successfully.")
                return redirect("edit_profile")
            else:
                messages.error(request, "Please correct the errors below.")

    return render(
        request,
        "accounts/edit_profile.html",
        {"user_form": user_form, "profile_form": profile_form, 'profile_picture': profile_picture},
    )

class PasswordsChangeView(PasswordChangeView):
    form_class = CustomPasswordChangeForm
    success_url = reverse_lazy('edit_profile')

    def form_valid(self, form):
        messages.success(self.request, 'Your password has been successfully changed.')
        return super().form_valid(form)


def about(request):
    return HttpResponse("About Page -- Coming soon ")

def services(request):
    return HttpResponse("Services Page -- Coming soon ")

def portfolio(request):
    return HttpResponse("Portfolio Page -- Coming soon ")

def blog(request):
    return HttpResponse("Blog Page -- Coming soon ")

def contact(request):
    return HttpResponse("Contact Page -- Coming soon ")

