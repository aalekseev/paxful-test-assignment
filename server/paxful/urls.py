"""paxful URL Configuration."""
from django.urls import path

from paxful.views import rates_view

urlpatterns = [
    path('api/data', rates_view),
]
