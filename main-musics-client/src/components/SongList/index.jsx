import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { SiDeezer } from 'react-icons/si';
import { RiDeleteBin2Line } from 'react-icons/ri';

import { addMusicToListFavorite, removeMusicToListFavorite } from '../../store/modules/favorites/actios';

import { Box, Content, CardActions, Button, Icon } from './styles';

export default function SongList({ title, songs, showFavorites }) {
  const [preview, setPreview] = useState('');
  const [previousButtonIcon, setPreviousButtonIcon] = useState('');
  const [musicInPlaying, setMusicInPlaying] = useState('');
  const [iconMusicInPlaying, setIconMusicInPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
      setPreview(musicInPlaying);
      setPreviousButtonIcon(iconMusicInPlaying);

      iconMusicInPlaying.setAttribute('src', '/assets/pause.svg');
      iconMusicInPlaying.setAttribute('alt', 'icone de pausa');
    } else if (isPlaying === false) {
      audioRef.current.pause();
      setPreview(musicInPlaying);

      if (iconMusicInPlaying) {
        iconMusicInPlaying.setAttribute('src', '/assets/play_arrow.svg');
        iconMusicInPlaying.setAttribute('alt', 'icone de play');
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (preview) {
      if (musicInPlaying !== preview) {
        previousButtonIcon.setAttribute('src', '/assets/play_arrow.svg');
        previousButtonIcon.setAttribute('alt', 'icone de play');

        setPreviousButtonIcon(iconMusicInPlaying);
        setIconMusicInPlaying(iconMusicInPlaying);
        setIsPlaying(true);
      }
    }
  }, [isPlaying, musicInPlaying, preview]);

  function openMusicOrigin(link) {
    window.open(link, '_blank');
  }

  function handlePreviewMusic(e, song) {
    setMusicInPlaying(song);
    setIsPlaying(!isPlaying);
    setIconMusicInPlaying(e.target);
  }

  function handleAddMusicFavorite(song) {
    dispatch(addMusicToListFavorite(song));
  }

  function handleRemoveMusicFavorite(id) {
    dispatch(removeMusicToListFavorite(id));

    if (isPlaying) {
      audioRef.current.pause()
    }
  }

  return (
    <Content>
      <h2>{title}</h2>

      <Box>
        <thead>
          <tr>
            <th> </th>
            <th>Álbum</th>
            <th>Artista</th>
            <th>Faixa</th>
            <th>Duração</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {songs.map(song => (
            <tr key={song.music.id}>
              <td>
                <img
                  src={song.music.album.image}
                  alt={`imagem do album ${song.music.album.title}`}
                />
              </td>
              <td>{song.music.album.title}</td>
              <td>{song.music.artist.name}</td>
              <td>{song.music.title}</td>
              <td>{song.music.durationAsString}</td>
              <td>
                <CardActions>
                  <Button onClick={() => openMusicOrigin(song.music.link)}>
                    <SiDeezer />
                  </Button>

                  <Button
                    onClick={e => handlePreviewMusic(e, song.music.preview)}
                  >
                    <Icon
                      src="/assets/play_arrow.svg"
                      alt="icone de play"
                      isPlaying={isPlaying}
                    />

                    <audio src={musicInPlaying} preload="true" ref={audioRef} />
                  </Button>

                  {showFavorites ? (
                    <Button onClick={() => handleRemoveMusicFavorite(song.music.id)}>
                      <RiDeleteBin2Line />
                    </Button>
                  ) : (
                    <Button onClick={() => handleAddMusicFavorite(song.music)}>
                      <FaStar />
                    </Button>
                  )}
                </CardActions>
              </td>
            </tr>
          ))}
        </tbody>
      </Box>
    </Content>
  );
}
