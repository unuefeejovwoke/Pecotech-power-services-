from django.contrib import admin
from .models import BlogPost, Comment, CustomUser, UserProfile

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff')

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'profile_picture', 'number')

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    search_fields = ('title', 'category')
    list_filter = ('category', 'date')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'content', 'date_added')
    search_fields = ('user__username', 'content')
    list_filter = ('date_added',)

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(UserProfile, UserProfileAdmin)

admin.site.register(BlogPost, BlogPostAdmin)

