from django.urls import path

from app.search.views import SearchViews

urlpatterns = [
    path('', SearchViews.as_view(), name='search')
]