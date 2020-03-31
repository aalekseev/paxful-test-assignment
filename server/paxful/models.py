from django.db import models


class Trade(models.Model):
    first_name = models.CharField(max_length=255)
