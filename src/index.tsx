import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <StrictMode>
        <GlobalStyles />
        <App />
        <ToastContainer />
    </StrictMode>,
    document.getElementById('root')
);
