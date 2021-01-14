from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50, unique=True, null=False)
    email = models.EmailField(max_length=250, null=False)
    password = models.CharField(max_length=50, null=False)
    age = models.IntegerField(null=False)

    def __str__(self):
        return self.username


class Songs(models.Model):
    songname = models.CharField(max_length=50, unique=True, null=False)
    artist = models.CharField(max_length=10, unique=True, null=False)
    category = models.CharField(max_length=10, unique=True, null=False)

    def __str__(self):
        return self.songname


class UserPlaylists(models.Model):
    playlistname = models.CharField(max_length=50, unique=True, null=False)
    playlistowner = models.ForeignKey(
        User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.playlistname


class PlaylistSongs(models.Model):
    song = models.ForeignKey(Songs, null=True, on_delete=models.SET_NULL)
    playlist = models.ForeignKey(
        UserPlaylists, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.song
