from django.urls import path

from .views import UserDetailView, UserListView, SongDetailView, SongListView

urlpatterns = [
    path('', UserListView.as_view()),
    path('<pk>', UserDetailView.as_view()),
    path('song/', SongListView.as_view()),
    path('song/<pk>/', SongDetailView.as_view())
]
