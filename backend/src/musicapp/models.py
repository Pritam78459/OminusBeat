from django.db import models
from django.contrib.auth.models import User


class Song(models.Model):
    songpath = models.CharField(max_length=500, unique=True, null=False)
    songname = models.CharField(max_length=50, unique=True, null=False)
    artist = models.CharField(max_length=50, null=False)
    category = models.CharField(max_length=10, null=False)
    songlength = models.CharField(max_length=10, null=False, default='04:00')

    def __str__(self):
        return self.songname


class UserPlaylists(models.Model):
    playlistname = models.CharField(max_length=50, unique=True, null=False)
    playlistowner = models.ForeignKey(
        User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.playlistname


class PlaylistSongs(models.Model):
    song = models.ForeignKey(Song, null=True, on_delete=models.SET_NULL)
    playlist = models.ForeignKey(
        UserPlaylists, null=True, on_delete=models.SET_NULL)
