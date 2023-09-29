from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.http import HttpResponse

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
    return render(request, 'accounts/login.html')


def registration_view(request):
    return render(request, 'accounts/signup.html')



def dashboard(request):
    return render(request, 'template/profile.html')