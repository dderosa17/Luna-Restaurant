from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def user_directory_path(instance, filename):
        # file will be uploaded to MEDIA_ROOT/name/<filename>
        return f'{instance.name}/{filename}'

    email = models.EmailField(unique=True)
    username = models.CharField(
        verbose_name='username',
        max_length=200,
        unique=True
    )
    first_name = models.CharField(
        verbose_name='first name',
        max_length=200,
        blank=True,
    )
    last_name = models.CharField(
        verbose_name='last name',
        max_length=200,
        blank=True,
    )
    location = models.TextField(
        verbose_name='location',
        max_length=100,
        blank=True,
        null=True,
    )
    phone = models.CharField(
        verbose_name='phone',
        max_length=50,
        blank=True,
        null=True,
    )
    things_i_love = models.TextField(
        verbose_name='things_i_love',
        max_length=255,
        blank=True,
        null=True,
    )
    description = models.TextField(
        verbose_name='description',
        max_length=255,
        blank=True,
        null=True,
    )
    joined_date = models.DateTimeField(
        verbose_name='date joined',
        auto_now_add=True
    )
    profile_pic = models.ImageField(
        verbose_name='image',
        blank=True,
        null=True,
    )
    is_staff = models.BooleanField(
        verbose_name='staff status',
        default=False,
        help_text='Designates whether the user can log into this site.',
    )
    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Designates whether this user should be treated as active. '
                  'Unselect this instead of deleting accounts.'
    )

    image = models.ImageField(blank=True, null=True, upload_to='user_directory_path')

    def __str__(self):
        return self.username

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username
