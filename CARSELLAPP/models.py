from django.db import models
from django.contrib.auth.models import User


class Car(models.Model):
    brand = models.CharField(max_length=20)
    model = models.CharField(max_length=30)
    year = models.IntegerField(max_length=4)
    price = models.IntegerField(max_length=10)
    description = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="cars", on_delete=models.CASCADE, null=True)
