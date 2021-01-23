import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styled';

export default function HeaderComponent() {
  return (
    <>
      <Header>
        <Link to="/">
          <h1>Musical lyrics library</h1>
        </Link>
      </Header>
    </>
  );
}
