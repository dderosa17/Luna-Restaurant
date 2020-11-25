from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView

from app.categories.models import Category
from app.categories.serializers import CategorySerializer


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# class CategoryListCreateAPIView(ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
#
#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)
#         category = Category.objects.latest('id')
#         if "restaurants" in self.request.data:
#             for restaurant in self.request.data['restaurants']:
#                 category.restaurants.add(restaurant)


class CategoryRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [IsAuthenticated & IsAuthorOrReadPostOnly]
    lookup_field = 'id'

    # def get_queryset(self, **kwargs):
    #     return Category.objects.get(id=self.kwargs['category_id'])


