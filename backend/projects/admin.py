from django.contrib import admin
from .models import Projects, ServiceRequest
from django.core.mail import send_mail

class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('user_full_name', 'date', 'title')

    def user_full_name(self, obj):
        return obj.user.first_name.title() + " " + obj.user.last_name.title()
    user_full_name.short_description = 'User Full Name'

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)

        # Send an email notification to the user
        user = obj.user
        subject = 'New Project Update'
        message = f"A new project update has been added:\nTitle: {obj.title}\nDescription: {obj.description}\nPosted on: {obj.date}"
        from_email = 'seu7.tech.com'
        recipient_list = [user.email]

        send_mail(subject, message, from_email, recipient_list)

admin.site.register(Projects, ProjectsAdmin)


class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'service_required', 'status', 'submission_date')
    list_filter = ('status', 'service_required')
    search_fields = ('full_name', 'email', 'phone_number', 'status')
    list_editable = ('status',)
    list_per_page = 10

admin.site.register(ServiceRequest, ServiceRequestAdmin)
