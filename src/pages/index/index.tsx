import React, { FormEvent } from 'react';
import { Main, Form } from './ styled';

export default function IndexPage() {
  const [music, setMusic] = React.useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(music);
  };

  return (
    <Main>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input value={music} onChange={(e) => setMusic(e.target.value)} type="text" name="nameMusic" id="nameMusic" placeholder="Digite o nome da música" />
        <input type="submit" value="Pesquisar" />
      </Form>
    </Main>
  );
}
