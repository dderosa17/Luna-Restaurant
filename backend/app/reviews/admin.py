from django.contrib import admin

from .models import RestaurantReview, ReviewLikes, Comments_on_reviews, CommentLikes

admin.site.register(RestaurantReview)
admin.site.register(ReviewLikes)
admin.site.register(Comments_on_reviews)
admin.site.register(CommentLikes)
