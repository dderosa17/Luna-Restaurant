from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

api_patterns = [
    path('auth/', include('app.registration.urls')),
    path('search/', include('app.search.urls')),
    path('home/', include('app.home.urls')),
    path('restaurants/', include('app.restaurants.urls')),
    path('', include('app.reviews.urls')),
    path('users/', include('app.users.urls')),
    path('restaurants/category/', include('app.categories.urls')),

    # path('docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),

]

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
