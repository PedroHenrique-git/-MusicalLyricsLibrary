/* eslint-disable no-control-regex */
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Main, Form, LyricContainer } from './ styled';
import api from '../../utils/api';
import LoadingComponent from '../../components/isLoadingComponent';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';

const favoriteMusics: Object[] = [];

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

  const formatedLyric = (value: string): string[] => {
    let arr:string[] = [];
    if (value) {
      arr = value.split('\n');
    } else {
      arr.push('no music searched');
    }
    return arr;
  };

  const setFavoriteMusic = (): void => {
    if (lyric) {
      favoriteMusics.push({
        title: music,
        lyric,
      });
      localStorage.setItem('favoriteMusics', JSON.stringify(favoriteMusics));
    }
  };

  if (!isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <HeaderComponent />
      <Main>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <input value={music} onChange={(e) => setMusic(e.target.value)} type="text" name="nameMusic" id="nameMusic" placeholder="Artista - música" />
          <input type="submit" value="Pesquisar" className="btn" />
          <button disabled={lyric === ''} onClick={setFavoriteMusic} className="btn" type="button">Favorite music</button>
          <Link to="/favorites" className="btn btn-favorite">My favorite musics</Link>
        </Form>
        <LyricContainer>
          <h1 className={`${music && lyric ? 'title-music' : ''}`}>{`${music && lyric ? music : ''}`}</h1>
          <ul>
            {formatedLyric(lyric).map((line, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${index}`} className={`${formatedLyric(lyric)[0] === 'no music searched' ? 'no-music' : 'has-music'}`}>
                {line}
                {' '}
                <br />
              </li>
            ))}
          </ul>
        </LyricContainer>
      </Main>
      <FooterComponent />
    </>
  );
}
