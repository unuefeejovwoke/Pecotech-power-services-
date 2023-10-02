from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib import messages
import smtplib
from django.core.mail import EmailMessage


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

def dashboard(request):
    return render(request, 'accounts/profile.html')