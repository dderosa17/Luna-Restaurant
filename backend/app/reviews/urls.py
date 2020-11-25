from django.urls import path, include

from app.reviews.views.comments import UserComments, CreateReviewsComments, DeleteReviewsComments
from app.reviews.views.reviews import ReviewCreateView, ListReviewsSingleRestaurantView, ListReviewsByUserView, \
    GetUpdateDeleteView, LikeOrNoLikeView, ListLikedReView, ListReviewsCommentViews, ListAllReviewRestaurant


review_patterns = [
    path('new/<int:restaurant_id>/', ReviewCreateView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewsSingleRestaurantView.as_view()),
    path('restaurant/', ListAllReviewRestaurant.as_view()),
    path('user/<int:user_id>/', ListReviewsByUserView.as_view()),
    path('<int:review_id>/', GetUpdateDeleteView.as_view()),
    path('like/<int:review_id>/', LikeOrNoLikeView.as_view()),
    # path('like/<int:review_id>/', View.as_view()),
    path('likes/', ListLikedReView.as_view()),
    path('comments/', ListReviewsCommentViews.as_view()),

]

comment_patterns = [
    path('<int:user_id>/', UserComments.as_view()),
    path('new/<int:review_id>/', CreateReviewsComments.as_view()),
    path('remove/<int:comment_id>/', DeleteReviewsComments.as_view()),
]


urlpatterns = [
    path('reviews/', include(review_patterns)),
    path('review/comment/', include(comment_patterns)),

]
