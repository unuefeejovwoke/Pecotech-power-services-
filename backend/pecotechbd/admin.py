from django.contrib import admin
from .models import BlogPost, CustomUser, UserProfile

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff')

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'profile_picture', 'number')

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    search_fields = ('title', 'category')
    list_filter = ('category', 'date')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(UserProfile, UserProfileAdmin)

admin.site.register(BlogPost, BlogPostAdmin)

