export function addMusicToListFavorite(music) {
  return {
    type: 'ADD_MUSIC_FAVORITE',
    payload: {
      music
    }
  }
}

export function removeMusicToListFavorite(musicId) {
  return {
    type: 'REMOVE_MUSIC_FAVORITE',
    payload: {
      musicId
    }
  }
}