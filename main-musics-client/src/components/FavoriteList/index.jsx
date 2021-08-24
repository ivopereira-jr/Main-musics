import SongList from '../SongList';

import { Content, Title } from './styles';

export default function FavoritesList({ showFavorites, songs }) {
  console.log(songs)
  return (
    <Content>
      { songs.length !== 0 ? (
        <SongList title="Favoritos" showFavorites={showFavorites} songs={songs} />
      ) : (
        <Title>Poxaa você ainda não adicionou um favorito  😔</Title>
      )}
    </Content>
  );
}
