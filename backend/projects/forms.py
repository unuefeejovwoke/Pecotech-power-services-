from django import forms
from .models import ServiceRequest

class ServiceRequestForm(forms.ModelForm):
    service_choices = [
        ('cctv', 'CCTV Installation'),
        ('solar', 'Solar Installation'),
        ('home', 'Home Automation'),
        ('electrical', 'Electrical Wiring'),
    ]

    service_required = forms.ChoiceField(
        choices=service_choices,
        widget=forms.RadioSelect(attrs={'class': 'text-primary'}),
    )

    class Meta:
        model = ServiceRequest
        fields = ['full_name', 'email', 'phone_number',  'service_required', 'uploaded_files']
        widgets = {
            'full_name': forms.TextInput(attrs={'class': 'w-full border mt-1 mb-3 border-black rounded-lg outline-none p-2', 'placeholder': 'Full Name'}),
            'email': forms.EmailInput(attrs={'class': 'w-full border mt-1 mb-3 border-black rounded-lg outline-none p-2', 'placeholder': 'Email Address'}),
            'phone_number': forms.TextInput(attrs={'class': 'w-full border mt-1 mb-3 border-black rounded-lg outline-none p-2', 'placeholder': 'Phone Number'}),
        }
