import { Link } from 'react-router-dom';
import { NotFoundContainer } from './style';
import notfound from '../../images/404.gif';

export default function NotFound(): JSX.Element {
    return (
        <NotFoundContainer>
            <img src={notfound} alt="404 gif" />
            <Link to="/">Return to home</Link>
        </NotFoundContainer>
    );
}
