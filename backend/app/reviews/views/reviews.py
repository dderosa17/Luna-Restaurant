from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView, GenericAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from app.reviews.models import RestaurantReview, ReviewLikes
from app.reviews.permissions import RestaurantPatchDeletePutPermission
from app.reviews.serializers import ReviewSerializer
from app.restaurants.models import Restaurant


# /Create new review for a restaurant.
class ReviewCreateView(CreateAPIView):
    serializer_class = ReviewSerializer
    queryset = RestaurantReview.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        serializer.save(review_owner=self.request.user, restaurant_reviewed=restaurant)


# /Get the list of the reviews for a single restaurant.
class ListReviewsSingleRestaurantView(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = RestaurantReview.objects.all()
    lookup_url_kwarg = 'restaurant_id'
    permission_classes = []
    authentication_classes = []

    def get_queryset(self, **kwargs):
        return RestaurantReview.objects.filter(restaurant_reviewed_id=self.kwargs['restaurant_id'])


# /Get the list of the reviews by a single user.
class ListReviewsByUserView(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        return RestaurantReview.objects.filter(review_owner=self.kwargs['user_id'])


# Get/Update/Delete a specific review by ID and display all the information.
class GetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = RestaurantReview.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [
        IsAuthenticated,
        RestaurantPatchDeletePutPermission
    ]


# Like and Remove a Like from the review
class LikeOrNoLikeView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = RestaurantReview.objects.all()

    def post(self, request, pk, **kwargs):
        self.get_object()
        like, created = ReviewLikes.objects.get_or_create(user=request.user)
        return Response('Liked')

    def delete(self, request, *args, **kwargs):
        self.get_object()
        try:
            like, created = ReviewLikes.objects.get(user=request.user).delete()
        except ReviewLikes.DoesNotExist:
            return Response({'Cannot unlike more than once'}, 400)
        return Response('Unliked')


# /Get the list of the reviews the current user liked.
class ListLikedReView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return RestaurantReview.objects.filter(likes__user=self.request.user)


# / Get the list of the reviews the current user commented.
class ListReviewsCommentViews(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return RestaurantReview.objects.filter(comments_on_review__comment_owner=self.request.user)


# / Get the list of all the Restaurant Reviews
class ListAllReviewRestaurant(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = RestaurantReview.objects.all()
