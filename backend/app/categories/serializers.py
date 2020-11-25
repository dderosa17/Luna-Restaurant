from rest_framework import serializers

from app.categories.models import Category

from app.restaurants.serializers import RestaurantSerializer


class CategorySerializer(serializers.ModelSerializer):
    restaurants = RestaurantSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'restaurants']
