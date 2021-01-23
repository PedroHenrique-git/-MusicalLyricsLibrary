/* eslint-disable no-control-regex */
import React from 'react';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import { MusicsContainer } from './styled';

interface Imusic {
    title: string;
    lyric:string;
}

export default function FavoriteMusic() {
  const musics: string | null = localStorage.getItem('favoriteMusics');
  let favoriteMusics: Array<Imusic> = [];

  if (musics) {
    favoriteMusics = JSON.parse(musics);
  }

  const formatedLyric = (value: string): string[] => value.split('\n');

  if (!favoriteMusics || !musics) {
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
        {favoriteMusics.map((music) => (
          <ul>
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
