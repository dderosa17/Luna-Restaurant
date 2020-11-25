from django.conf import settings
from django.db import models

from app.categories.models import Category


def restaurant_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Restaurant(models.Model):
    Price_levels = [
        (1, '$1-$10'),
        (2, '$11-$30'),
        (3, '$30-$50'),
    ]

    Noise_levels = [
        (1, 'quiet'),
        (2, 'comfort'),
        (3, 'noisy'),
    ]

    name = models.CharField(max_length=50)
    category = models.ForeignKey(to=Category, related_name='restaurants', on_delete=models.CASCADE)
    # category = models.CharField(max_length=50)
    country = models.TextField(max_length=100, blank=True)
    street = models.TextField(max_length=100, blank=True)
    city = models.TextField(max_length=100, blank=True)
    zip = models.CharField(max_length=10)
    website = models.TextField(
        verbose_name='website',
        max_length=150,
        blank=True,
        null=True,
    )
    phone = models.CharField(max_length=50)
    email = models.EmailField(unique=True, blank=True)
    opening_hours = models.TextField(max_length=100, blank=True)
    price_level = models.IntegerField(choices=Price_levels, null=True, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='restaurant_directory_path')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_owner = models.BooleanField(verbose_name='owner', default=False, null=True, blank=True)
    reservations = models.BooleanField(default=False, null=True, blank=True)
    delivery = models.BooleanField(default=False, null=True, blank=True)
    take_away = models.BooleanField(default=False, null=True, blank=True)
    credit_cards = models.BooleanField(default=False, null=True, blank=True)
    wifi = models.BooleanField(default=False, null=True, blank=True)
    noise_level = models.IntegerField(choices=Noise_levels, null=True, blank=True)
    waiter_service = models.BooleanField(default=False, null=True, blank=True)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='restaurants', on_delete=models.CASCADE)

    def __str__(self):
        # name = f'{self.name[:30]}...' if len(self.name) > 30 else self.name
        return f'Restaurant {self.pk}: {self.name} in the category of {self.category}'