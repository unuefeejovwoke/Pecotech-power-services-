from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser
from django import forms

class CustomTextWidget(forms.TextInput):
    pass

class UserRegisterForm(UserCreationForm):

    username = forms.CharField(
        widget=CustomTextWidget(attrs={"class": "w-full border-b-2 p-3 outline-none"})
    )
    email = forms.CharField(
        widget=CustomTextWidget(attrs={"class":"w-full email border-b-2 p-3 outline-none"})
    )

    password1 = forms.CharField(
        widget=CustomTextWidget(attrs={"class":"w-full border-b-2 p-3 outline-none"}),
        label= "Password"
    )

    password2 = forms.CharField(
        widget=CustomTextWidget(attrs={"class":"w-full border-b-2 p-3 outline-none"}),
        label= "Comfirm password"
    )

    class Meta:
        model = CustomUser
        fields = [
             'username', 'email', 'password1', 'password2'
        ]