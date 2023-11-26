from audioop import reverse
from django.contrib import admin
from .models import Projects, ServiceProject, ServiceRequest
from django.core.mail import send_mail

from django.template.loader import render_to_string
from django.utils.html import strip_tags

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


class ServiceProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'start_date', 'finish_date', 'status')
    search_fields = ('title', 'user__username')
    list_filter = ('status',)

    def save_model(self, request, obj, form, change):
        # Check if the status has been changed to "completed"
        if change and obj.status == 'completed' and obj.status != form.initial['status']:
            # Construct the URL for the user's dashboard
            dashboard_url = f'/dashboard/?user_id={obj.user.id}'

            # Send email to the user
            subject = 'Project Completed'
            message = render_to_string('email/project_completed_email.txt', {'project': obj, 'dashboard_link': dashboard_url})
            html_message = render_to_string('email/project_completed_email.html', {'project': obj, 'dashboard_link': dashboard_url})
            from_email = 'seu7.tech@gmail.com'  # replace with your email
            to_email = obj.user.email
            send_mail(subject, strip_tags(message), from_email, [to_email], html_message=html_message)

        super().save_model(request, obj, form, change)

admin.site.register(ServiceProject, ServiceProjectAdmin)