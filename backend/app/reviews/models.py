from django.conf import settings
from django.db import models
from app.restaurants.models import Restaurant


class RestaurantReview(models.Model):
    restaurant_reviewed = models.ForeignKey(
        verbose_name='restaurant_review',
        related_name='reviews',
        to=Restaurant,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    content = models.TextField(
        max_length=255,
    )
    created = models.DateTimeField(
        auto_now=True,
    )
    modified = models.DateTimeField(
        auto_now_add=True,
    )
    rating = models.IntegerField(
        default=0
    )
    review_owner = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='reviews',
        on_delete=models.CASCADE,

    )

    def __str__(self):
        return f'Restaurant review from user {self.user_id}'


class ReviewLikes(models.Model):
    user = models.ForeignKey(
        verbose_name='user',
        related_name='review_likes',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    review = models.ForeignKey(
        verbose_name='review_likes',
        related_name='likes',
        to=RestaurantReview,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f"Like from user {self.user_id}"


class Comments_on_reviews(models.Model):
    content = models.TextField(
        max_length=255,
    )
    created = models.DateTimeField(
        auto_now=True,
    )
    modified = models.DateTimeField(
        auto_now_add=True,
    )
    comment_owner = models.ForeignKey(
        verbose_name='comment_owner',
        related_name='comments',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    restaurant_review = models.ForeignKey(
        verbose_name='restaurant_review',
        related_name='comments_on_review',
        to=RestaurantReview,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"ID: {self.id} - {self.text_content} by {self.comment_owner}"


class CommentLikes(models.Model):
    comment_like_owner = models.ForeignKey(
        verbose_name='comment_like_owner',
        related_name='likes',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    comment_like = models.ForeignKey(
        verbose_name='comment_like',
        related_name='liked_comment',
        to='Comments_on_reviews',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f"Like from user {self.comment_like_owner}"
