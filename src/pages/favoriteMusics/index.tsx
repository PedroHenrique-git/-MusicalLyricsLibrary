/* eslint-disable no-control-regex */
import React from 'react';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import { MusicsContainer } from './styled';

interface Imusic {
    index: number;
    title: string;
    lyric:string;
}

export default function FavoriteMusic() {
  const musics: string | null = localStorage.getItem('favoriteMusics');
  const [favoriteMusics, setFavoriteMusics] = React.useState<Array<Imusic>>([]);

  const formatedLyric = (value: string): string[] => value.split('\n');

  const deleteMusic = (index: number, title:string): void => {
    favoriteMusics.splice(index, 1);
    setFavoriteMusics(favoriteMusics.filter((music) => music.title !== title));
    localStorage.setItem('favoriteMusics', JSON.stringify(favoriteMusics));
  };

  React.useEffect(() => {
    if (musics) {
      setFavoriteMusics(JSON.parse(musics));
    }
  }, []);

  if (!favoriteMusics || !musics || musics === '[]') {
    return (
      <>
        <HeaderComponent />
        <h1 style={{
          height: '83.5vh',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
        }}
        >
          No music found

        </h1>
        <FooterComponent />
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <MusicsContainer>
        {favoriteMusics.map((music, index) => (
          <ul>
            <li>
              <button title="delete music" onClick={() => deleteMusic(index, music.title)} type="button" className="btn-delete">X</button>
            </li>
            <li>{music.title}</li>
            {formatedLyric(music.lyric).map((lines) => (
              <li>
                {lines}
                {' '}
                <br />
              </li>
            ))}
          </ul>
        ))}
      </MusicsContainer>
      <FooterComponent />
    </>
  );
}
