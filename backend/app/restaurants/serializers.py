from rest_framework import serializers

from app.restaurants.models import Restaurant
from app.users.serializers import UserSerializer
from app.reviews.models import RestaurantReview
from django.db.models import Avg


class RestaurantSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True
    )  # show the details of the author

    average_rating = serializers.SerializerMethodField()

    def get_average_rating(self, instance):
        # average = RestaurantReview.objects.filter(restaurant_reviewed=instance).aggregate(rating=Avg('rating'))
        average = Restaurant.objects.filter(id=instance.id).aggregate(rating=Avg('reviews__rating'))
        if average is None:
            return 0
        return average

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'street', 'city', 'zip', 'website', 'phone', 'email', 'opening_hours',
                  'price_level', 'author', 'average_rating', 'image']
        read_only_fields = ['author']
