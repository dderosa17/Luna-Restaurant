from django.contrib.auth.models import User
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from app.restaurants.models import Restaurant
from app.restaurants.serializers import RestaurantSerializer
from app.reviews.models import RestaurantReview
from app.reviews.serializers import ReviewSerializer
from app.users.serializers import UserSerializer


class SearchViews(GenericAPIView):

    def post(self, *args, **kwargs):
        type = self.request.data.get('type').lower()
        search_string = self.request.query_params.get('search')
        if type == 'restaurant':
            return Response(RestaurantSerializer(Restaurant.objects.filter(name__icontains=search_string),
                                                 many=True).data)
        elif type == 'user':
            return Response(UserSerializer(User.objects.filter(username__icontains=search_string), many=True).data)
        elif type == 'review':
            return Response(ReviewSerializer(RestaurantReview.objects.filter(text_content__icontains=search_string),
                                             many=True).data)
        else:
            return Response('Nothing')
