import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import IndexPage from './pages/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <IndexPage />
      <FooterComponent />
    </>
  );
}

export default App;
