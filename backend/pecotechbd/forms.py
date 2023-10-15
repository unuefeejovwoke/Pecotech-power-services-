from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from .models import CustomUser
from .models import UserProfile
from django import forms
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import update_session_auth_hash

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
        widget=forms.PasswordInput(attrs={"class":"w-full border-b-2 p-3 outline-none"}),
        label= "Password"
    )

    password2 = forms.CharField(
        widget=forms.PasswordInput(attrs={"class":"w-full border-b-2 p-3 outline-none"}),
        label= "Confirm password"
    )

    class Meta:
        model = CustomUser
        fields = [
             'username', 'email', 'password1', 'password2'
        ]

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['number', 'profile_picture']
        widgets = {
            'number': forms.TextInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none', 'placeholder': 'Phone Number'}),
            'profile_picture': forms.FileInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none'}),
        }

class UserEditForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'first_name', 'last_name']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none', 'placeholder': 'Username'}),
            'email': forms.EmailInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none', 'placeholder': 'Email'}),
            'first_name': forms.TextInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none', 'placeholder': 'First Name'}),
            'last_name': forms.TextInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none', 'placeholder': 'Last Name'}),
        }



# class PasswordChangeForm(UserChangeForm):
   

#     password = forms.CharField(
#         widget=forms.PasswordInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none'}),
#         label="Current Password",
#          help_text=_(
#             ""
#         ),
#     )

#     class Meta:
#         model = CustomUser
#         fields = [
#             'password',
#         ]



class CustomPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none'}),
        label="Current Password",
        strip=False,
    )

    new_password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none'}),
        label="New Password",
        strip=False,
    )
    
    new_password2 = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'w-full border-b-2 p-3 my-2 outline-none'}),
        label="Confirm New Password",
        strip=False,
    )

    class Meta:
        model = CustomUser
        fields = ('old_password', 'new_password1', 'new_password2')