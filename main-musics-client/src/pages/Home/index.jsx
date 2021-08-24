/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import SongList from '../../components/SongList';
import ListFavorites from '../../components/FavoriteList'

// import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';

import api from '../../services/api'
import { formatData } from '../../utils/formatData';

import { Container } from '../../styles/global';
import { Content } from './styles';

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState('');
  const [viewFavorites, setViewFavorites] = useState(false);
  const [getContentHome, setGetContentHome] = useState(false);
  const favorites = useSelector(state => state.favorites.musics);

  function handleGetFavorites() {
    setViewFavorites(true);
  }

  function handleGoHome() {
    setGetContentHome(true);
    setViewFavorites(false);
  }
  
  useEffect(() => {
    async function getContent() {
      try {
        if(search) {
          const { data } = await api.get('/', {
            params: { filter: `search?q=${search}`}
          })
          .then(response => response.data)
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

          if(data) {
            const songsFormatted = formatData(data)
            setSongs(songsFormatted);
          }
        } else {
          const { tracks } = await api.get('/')
          .then(response => response.data)
          .catch((err) => {
            console.error(`Xiii algo deu errado ${err}`);
          });

          if(tracks) {
            const songsFormatted = formatData(tracks.data)
            setSongs(songsFormatted);
          }
        }
      } catch (err) {
        console.log(`Xiii algo deu errado ${err}`);
      }
    }

    getContent();
  }, [getContentHome, search]);

  return (
    <>
      <Header
        goHome={handleGoHome}
        favorites={handleGetFavorites}
        showFavorites={viewFavorites}
        getContentSearch={setSearch}
      />

      <Content>
        <Container>
          {viewFavorites ? (
            <ListFavorites showFavorites={viewFavorites} songs={favorites} />
          ) : (
            <>  
              <SongList title={ search ? `Buscando: ${search}` : "Mais ouvidas"} songs={songs} />
            </>
          )}
        </Container>
      </Content>
    </>
  );
}
