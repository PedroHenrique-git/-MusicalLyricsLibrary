import { Redirect, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdReturnLeft } from 'react-icons/io';
import { useArtist } from '../../services/getData';
import { MainContainer } from './style';
import Album from '../../components/Album/Album';
import Tracks from '../../components/Tracks/Tracks';
import Loading from '../../components/Loading/Loading';
import gif from '../../images/load-image-gif.gif';
import background from '../../images/background.jpg';

const htmlBackground = document.querySelector('html') as HTMLElement;

export default function ArtistPage(): JSX.Element {
    const { name } = useParams<{ name: string }>();
    const { data, isLoading, isError } = useArtist(name);

    if (isLoading) return <Loading />;

    if (isError) return <h1>Error...</h1>;

    if (data.artists === null) {
        toast.error('nothing found');
        return <Redirect to="/" />;
    }

    if (data.artists[0].strArtistWideThumb !== null) {
        htmlBackground.style.backgroundImage = `url(${data.artists[0].strArtistWideThumb})`;
    } else {
        htmlBackground.style.backgroundImage = `url(${background})`;
    }

    return (
        <MainContainer>
            <section>
                <Link to="/">
                    <IoMdReturnLeft size={50} color="#d8d8d8" />
                </Link>
                <div className="artist_informations">
                    <a
                        className="artist_logo"
                        href={`https://${data.artists[0].strWebsite}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h1>
                            <img
                                src={
                                    !isLoading
                                        ? data.artists[0].strArtistLogo
                                        : gif
                                }
                                alt={data.artists[0].strArtist}
                            />
                        </h1>
                    </a>
                    <ul className="artist_informations-data">
                        <li>{data.artists[0].intFormedYear}</li>
                        <li>{data.artists[0].strGenre}</li>
                        <li>{data.artists[0].strStyle}</li>
                    </ul>
                    <ul className="artist_informations-social-medias">
                        <li>
                            <a href={`https://${data.artists[0].strTwitter}`}>
                                {data.artists[0].strTwitter}
                            </a>
                        </li>
                        <li>
                            <a href={`https://${data.artists[0].strFacebook}`}>
                                {data.artists[0].strFacebook}
                            </a>
                        </li>
                    </ul>
                    <p>{data.artists[0].strBiographyEN}</p>
                </div>
                <div className="artist_informations-image">
                    <img
                        src={!isLoading ? data.artists[0].strArtistThumb : gif}
                        alt={data.artists[0].strArtist}
                    />
                </div>
                <div className="album-container">
                    <h1>Albums</h1>
                    <Album id={data.artists[0].idArtist} />
                </div>
                <div className="tracks-container">
                    <h1>Some tracks</h1>
                    <Tracks id={data.artists[0].idArtist} />
                </div>
            </section>
        </MainContainer>
    );
}
