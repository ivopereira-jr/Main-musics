import { BsSearch } from 'react-icons/bs';
import { FaHome, FaStar } from 'react-icons/fa';

import { Box, Container, Content, Button } from './styles';

export default function Header({ goHome, favorites, showFavorites, getContentSearch }) {

  return (
    <Container>
      <Content>
        <img src="/assets/logo.png" alt="Logo marca do main musicas" />

        <Box>
          <span>
            <BsSearch />
          </span>

          <input
            type="text"
            placeholder="Pesquise por álbum, artista, ou título musical"
            onChange={(e) => getContentSearch(e.target.value)}
          />
        </Box>

        {showFavorites ? (
          <Button onClick={goHome}>
            <span>
              <FaHome />
            </span>
            home
          </Button>
        ) : (
          <Button onClick={favorites}>
            <span>
              <FaStar />
            </span>
            Favoritos
          </Button>
        )}
      </Content>
    </Container>
  );
}
