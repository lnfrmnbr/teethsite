from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.ind, name = 'home'),
    path('about', views.about, name = 'about')
   # path('', views.before, name = 'home'),
   # path('', views.after, name = 'home')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)