from django.urls import path

from app.categories.views import CategoryListAPIView, CategoryRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('list/', CategoryListAPIView.as_view()),
    path('<int:id>/', CategoryRetrieveUpdateDestroyAPIView.as_view())
]
