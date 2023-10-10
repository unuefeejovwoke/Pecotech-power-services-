from django import template
import datetime

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
