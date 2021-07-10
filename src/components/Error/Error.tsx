import { Link } from 'react-router-dom';
import { ErrorContainer } from './style';

export default function Error(): JSX.Element {
    return (
        <ErrorContainer>
            <h1>Error</h1>
            <Link to="/">Return to home</Link>
        </ErrorContainer>
    );
}
