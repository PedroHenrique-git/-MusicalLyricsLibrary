import { LoadingContainer } from './style';
import gif from '../../images/loading.gif';

export default function Loading(): JSX.Element {
    return (
        <LoadingContainer>
            <img src={gif} alt="loading gif" />
        </LoadingContainer>
    );
}
