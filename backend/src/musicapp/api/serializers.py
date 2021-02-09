from rest_framework import serializers
from musicapp.models import User, Song


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('songpath', 'songname', 'artist', 'category')
