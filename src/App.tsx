import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Routes from './routes/routes';
// import HeaderComponent from './components/header';
// import FooterComponent from './components/footer';
// import IndexPage from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
