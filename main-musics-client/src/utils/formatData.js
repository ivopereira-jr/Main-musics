import { convertDurationToTimeString } from './convertDurarionToTimeString';

export function formatData(data) {
  return (
    data.map(track => {
      return {
        music: {
          id: track.id,
          link: track.link,
          title: track.title,
          duration: track.duration,
          durationAsString: convertDurationToTimeString(
            Number(track.duration),
          ),
          preview: track.preview,
          artist: {
            id: track.artist.id,
            name: track.artist.name,
            image: track.artist.picture,
            profile: track.artist.link,
          },
          album: {
            id: track.album.id,
            title: track.album.title,
            image: track.album.cover,
          },
        },
      };
    })
  );
}