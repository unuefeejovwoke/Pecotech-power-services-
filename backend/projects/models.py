from django.db import models
from pecotechbd.models import CustomUser 
from django.utils import timezone

class Projects(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Projects"

class ServiceRequest(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    quotation_info = models.TextField()
    service_choices = [
        ('cctv', 'CCTV Installation'),
        ('solar', 'Solar Installation'),
        ('home', 'Home Automation'),
        ('electrical', 'Electrical Wiring'),
    ]
    service_required = models.CharField(max_length=20, choices=service_choices)
    uploaded_files = models.FileField(upload_to='service_requests/', null=True, blank=True)
    status = models.CharField(max_length=20, default='pending')
    submission_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
    

class ServiceProject(models.Model):
    STATUS_CHOICES = [
        ('in_review', 'In Review'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='project_images/')
    start_date = models.DateTimeField(default=timezone.now)
    finish_date = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='in_review')
    location = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title