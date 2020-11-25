from django.urls import path

from app.users.views import ListUsers, GetAnyUserProfile, MyUserProfile, SearchUser

urlpatterns = [
    path('list/', ListUsers.as_view(), name='list-users'),
    path('<int:pk>/', GetAnyUserProfile.as_view(), name='retrieve-user'),
    path('me/', MyUserProfile.as_view(), name='retrieve-update-destroy-logged-in-user'),
    path('?search=<str:search_string>/', SearchUser.as_view(), name='search-user'),
]