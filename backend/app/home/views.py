from django.db.models import Avg
from rest_framework.generics import ListAPIView

from app.restaurants.models import Restaurant
from app.restaurants.serializers import RestaurantSerializer


class HomeView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get_queryset(self):
        # restaurants = Restaurant.objects.all()
        # top_rated_restaurants = sorted(restaurants, key=lambda restaurant: restaurant.average_rating, reverse=True)[:4]
        top_rated_restaurants = Restaurant.objects.annotate(average_rating=Avg('reviews__rating'))\
            .order_by('-average_rating').all()[:4]
        return top_rated_restaurants
