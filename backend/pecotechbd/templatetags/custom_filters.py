from django import template
import datetime
from django.utils.html import mark_safe
from django.template.defaultfilters import stringfilter
import re

register = template.Library()

@register.filter(name='time_based_greeting')
def time_based_greeting(value):
    now = datetime.datetime.now()
    if now.hour < 12:
        return "Good morning"
    elif now.hour < 17:
        return "Good afternoon"
    else:
        return "Good evening"



register = template.Library()

@register.filter(name='add_class_to_links')
@stringfilter
def add_class_to_links(value, css_class):
    # Add the specified class to all <a> tags in the HTML content
    return mark_safe(re.sub(r'<a ', f'<a class="{css_class}" ', value))
