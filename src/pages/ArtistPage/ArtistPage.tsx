import { Redirect, useParams } from 'react-router-dom';
import { useArtist } from '../../services/getData';
import { MainContainer } from './style';

const htmlBackground = document.querySelector('html') as HTMLElement;

export default function ArtistPage(): JSX.Element {
    const { name } = useParams<{ name: string }>();
    const { data, isLoading, isError } = useArtist(name);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    if (data.artists === null) {
        alert('Nada encontrado');
        return <Redirect to="/" />;
    }

    if (data.artists[0].strArtistWideThumb !== null) {
        htmlBackground.style.backgroundImage = `url(${data.artists[0].strArtistWideThumb})`;
    }

    return (
        <MainContainer>
            <h1>{data.artists[0].strArtist}</h1>
            <p>{data.artists[0].strBiographyEN}</p>
            <img
                src={data.artists[0].strArtistThumb}
                alt={data.artists[0].strArtist}
            />
        </MainContainer>
    );
}
