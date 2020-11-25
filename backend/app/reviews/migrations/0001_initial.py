# Generated by Django 3.1.2 on 2020-10-28 10:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurants', '0003_auto_20201027_1301'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantReview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=255)),
                ('created', models.DateTimeField(auto_now=True)),
                ('modified', models.DateTimeField(auto_now_add=True)),
                ('rating', models.IntegerField(default=0)),
                ('restaurant_review', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='restaurants.restaurant', verbose_name='restaurant_review')),
                ('review_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReviewLikes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='reviews.restaurantreview', verbose_name='review_likes')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='review_likes', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
        migrations.CreateModel(
            name='Comments_on_reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=255)),
                ('created', models.DateTimeField(auto_now=True)),
                ('modified', models.DateTimeField(auto_now_add=True)),
                ('comment_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL, verbose_name='comment_owner')),
                ('restaurant_review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments_on_review', to='reviews.restaurantreview', verbose_name='restaurant_review')),
            ],
        ),
        migrations.CreateModel(
            name='CommentLikes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_like', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='liked_comment', to='reviews.comments_on_reviews', verbose_name='comment_like')),
                ('comment_like_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to=settings.AUTH_USER_MODEL, verbose_name='comment_like_owner')),
            ],
        ),
    ]
