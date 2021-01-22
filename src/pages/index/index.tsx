/* eslint-disable no-control-regex */
import React, { FormEvent } from 'react';
import { Main, Form, LyricContainer } from './ styled';
import api from '../../utils/api';
import LoadingComponent from '../../components/isLoadingComponent';

const favoriteMusics: string[] = [];

export default function IndexPage() {
  const [music, setMusic] = React.useState('');
  const [lyric, setLyric] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (music) {
      const val = treatText(music);
      requestLyric(val[0], val[1]);
    }
  };

  const treatText = (text: string): Array<string> => {
    const arr: Array<string> = text.split('-');
    arr.forEach((texto) => arr.push(texto.trim()));
    arr.shift();
    arr.shift();
    return arr;
  };

  const requestLyric = async (artist: string, musicSearch: string) => {
    setIsLoading(false);
    const result = await api.get(`${artist}/${musicSearch}`);
    setLyric(result.data.lyrics);
    setIsLoading(true);
  };

  const formatedLyric = (value: string): string => {
    // const btn = '<br> <button class="favorite-btn">Favorite music</button>';
    const string = value.replace(new RegExp('\n', 'g'), '<br>');
    return string;
  };

  const setFavoriteMusic = (): void => {
    if (lyric) {
      favoriteMusics.push(lyric);
      localStorage.setItem('favoriteMusics', JSON.stringify(favoriteMusics));
    }
  };

  if (!isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Main>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input value={music} onChange={(e) => setMusic(e.target.value)} type="text" name="nameMusic" id="nameMusic" placeholder="Artista - música" />
        <input type="submit" value="Pesquisar" />
        <button disabled={lyric === ''} onClick={setFavoriteMusic} type="button" className="favorite-btn">Favorite music</button>
      </Form>
      <LyricContainer>
        <p dangerouslySetInnerHTML={{ __html: formatedLyric(lyric) }} />
      </LyricContainer>
    </Main>
  );
}
