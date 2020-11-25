from django.urls import path
from app.restaurants.views import RestaurantListAPIView, RestaurantCreateAPIView, RestaurantRetrieveUpdateDestroyAPIView, ListRestaurantsUser


urlpatterns = [
    path('', RestaurantListAPIView.as_view()),
    path('new/', RestaurantCreateAPIView.as_view()),
    path('user/<int:user_id>/', ListRestaurantsUser.as_view()),
    path('<int:id>/', RestaurantRetrieveUpdateDestroyAPIView.as_view()),
]
