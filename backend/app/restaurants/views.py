from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from app.restaurants.serializers import RestaurantSerializer
from app.restaurants.models import Restaurant

from app.categories.models import Category


class RestaurantListAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantCreateAPIView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def post(self, request, *args, **kwargs):
        category = Category.objects.filter(title__icontains=request.data["category"])
        name = request.data['name']
        country = request.data['country']
        street = request.data['street']
        city = request.data['city']
        zip = request.data['zip']
        website = request.data['website']
        phone = request.data['phone']
        email = request.data['email']
        opening_hours = request.data['opening_hours']
        price_level = request.data['price_level']
        image = request.data['image']

        if category:
            restaurant = Restaurant(category=category[0],
                                    name=name,
                                    country=country,
                                    street=street,
                                    city=city,
                                    zip=zip,
                                    website=website,
                                    phone=phone,
                                    email=email,
                                    opening_hours=opening_hours,
                                    price_level=price_level,
                                    image=image,
                                    author=self.request.user)
            restaurant.save()
        else:
            category = Category(title=request.data["category"])
            category.save()
            restaurant = Restaurant(category=category,
                                    name=name,
                                    country=country,
                                    street=street,
                                    city=city,
                                    zip=zip,
                                    website=website,
                                    phone=phone,
                                    email=email,
                                    opening_hours=opening_hours,
                                    price_level=price_level,
                                    image=image,
                                    author=self.request.user)
            restaurant.save()

        return Response(self.get_serializer(restaurant).data)


class ListRestaurantsUser(ListAPIView):
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Restaurant.objects.filter(author__id=user_id).order_by("-created")


class RestaurantRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'id'
