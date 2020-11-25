from rest_framework.exceptions import NotFound
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from app.reviews.models import Comments_on_reviews, RestaurantReview, CommentLikes
from app.reviews.serializers import CommentsSerializer


# list of user review's comments
class UserComments(ListAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        return self.queryset.filter(comment_owner__id=self.kwargs.get('user_id'))


# making a new comment
class CreateReviewsComments(CreateAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()
    lookup_url_kwarg = 'review_id'

    def create(self, request, *args, **kwargs):
        try:
            review = RestaurantReview.objects.get(id=self.kwargs.get('review_id'))
        except RestaurantReview.DoesNotExist:
            raise NotFound('Review not found')
        # new_comment = {
        #     'content': self.request.data['content'],
        #     'restaurant_review': review.id,
        #     'comment_owner': self.request.user.id
        # }
        # serializer = self.get_serializer(data=new_comment)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        # return Response(serializer.data)
        new_comment = Comments_on_reviews(content=self.request.data['content'], restaurant_review=review, comment_owner=self.request.user)
        new_comment.save()
        return Response(self.get_serializer(new_comment).data)

    # def get_object(self):
    #     try:
    #         return RestaurantReview.objects.get(id=self.kwargs.get('review_id'))
    #     except RestaurantReview.DoesNotExist:
    #         raise NotFound('Review not found')

    # def perform_create(self, serializer):
    #     serializer.save(content=self.request.data['content'], restaurant_review=self.get_object(), comment_owner=self.request.user)


# delete a comment
class DeleteReviewsComments(DestroyAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()
    lookup_url_kwarg = 'comment_id'

    # def get_queryset(self):
    #     return self.queryset.filter(id=self.kwargs.get('comment_id'))


# Like and Remove a Like  from a review comment
class LikeOrUnLikeComment(RetrieveUpdateDestroyAPIView):
    serializer_class = CommentsSerializer
    queryset = Comments_on_reviews.objects.all()

    def post(self, request, pk, **kwargs):
        self.get_object()
        like, created = CommentLikes.objects.get_or_create(comment_like_owner=self.request.user)
        return Response('Liked')

    def delete(self, request, *args, **kwargs):
        self.get_object()
        try:
            like, created = CommentLikes.objects.get(comment_like_owner=self.request.user).delete()
        except CommentLikes.DoesNotExist:
            return Response({'you cant Unlike twice'}, 400)
        return Response('Unliked')
