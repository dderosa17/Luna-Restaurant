from django.urls import path

from app.home.views import HomeView

urlpatterns = [
    path('', HomeView.as_view())
]
