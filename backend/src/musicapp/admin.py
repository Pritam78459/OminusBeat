from django.contrib import admin
from .models import Song, UserPlaylists, PlaylistSongs

admin.site.register(Song)
admin.site.register(UserPlaylists)
admin.site.register(PlaylistSongs)
