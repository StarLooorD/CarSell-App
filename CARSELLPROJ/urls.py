from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('CARSELLAPP.urls')),
    path('', include('accounts.urls')),
]
