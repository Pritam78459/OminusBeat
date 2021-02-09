from rest_framework.generics import ListAPIView, RetrieveAPIView
from musicapp.models import User, Song
from .serializers import UserSerializer, SongSerializer


class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SongListView(ListAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongDetailView(RetrieveAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
