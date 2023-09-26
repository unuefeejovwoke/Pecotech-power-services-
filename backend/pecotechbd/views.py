from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    return render(request , 'home.html')

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')  # Use get() to avoid MultiValueDictKeyError
        password = request.POST.get('password')

        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('dashboard')  # Redirect to the 'dashboard' URL name

    # Handle failed login or display login form
    return render(request, 'accounts/login.html')

def dashboard(request):
    return render(request, 'template/profile.html')