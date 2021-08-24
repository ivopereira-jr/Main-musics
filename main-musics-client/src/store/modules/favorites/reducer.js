/* eslint-disable array-callback-return */
import produce from 'immer';

const initialState = {
  musics: []
}

export default function reducer(state = initialState, action) {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_MUSIC_FAVORITE': {
        const { music } = action.payload;

        const musicInListIndex = draft.musics.findIndex(item =>
          item.music.id === music.id
        );

        if(musicInListIndex >= 0) {
          return;
        } else {
          draft.musics.push({
            music
          })
        }

        break;
      }
      case 'REMOVE_MUSIC_FAVORITE': {
        const { musicId } = action.payload;
        
        return {
          ...draft,
          musics: draft.musics.filter(item => item.music.id !== musicId)
        }
      }
      default: {
        return draft;
      }
    }
  });
}

