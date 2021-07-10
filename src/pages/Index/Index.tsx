import { FormEvent, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Redirect, Link } from 'react-router-dom';
import { SearchContainer, BackgroundContainer } from './style';
import { baseUrl } from '../../services/getData';

type artistType = {
    name: string;
    image: string;
    id: number;
};

export default function Index(): JSX.Element {
    const [artist, setArtist] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [searched, setSearched] = useState<artistType[]>([]);

    useEffect(() => {
        const artists = localStorage.getItem('artists');

        if (artists) {
            setSearched(JSON.parse(artists));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('artists', JSON.stringify(searched));
    }, [searched]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const request = await fetch(`${baseUrl}/search.php?s=${artist}`);
        const data: {
            artists: Array<{
                strArtist: string;
                strArtistThumb: string;
            }>;
        } = await request.json();
        const index = searched.findIndex((obj) => obj.name === artist);
        if (index === -1 && data.artists) {
            if (searched.length <= 3) {
                setSearched([
                    ...searched,
                    {
                        name: artist.toLocaleLowerCase(),
                        image: data.artists[0].strArtistThumb,
                        id: searched.length,
                    },
                ]);
            } else {
                const copyState = [...searched];
                let menor = copyState[0].id;
                copyState.forEach((obj) => {
                    if (obj.id < menor) menor = obj.id;
                });
                const minItemIndex = copyState.findIndex(
                    (obj) => obj.id === menor
                );
                copyState.splice(minItemIndex, 1, {
                    name: artist.toLocaleLowerCase(),
                    image: data.artists[0].strArtistThumb,
                    id: copyState.length + menor,
                });
                setSearched(copyState);
            }
        }
        setRedirect(true);
    };

    if (redirect) return <Redirect to={`/artist/${artist}`} />;

    return (
        <>
            <BackgroundContainer />
            <SearchContainer>
                <h1>Search by name of your favorite artist</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        autoComplete="off"
                        type="text"
                        name="artist"
                        id="artist"
                        placeholder="artist name"
                        onChange={(e) =>
                            setArtist(e.target.value.toLocaleLowerCase())
                        }
                    />
                    <button
                        type="submit"
                        disabled={!artist}
                        style={!artist ? { opacity: 0.5 } : { opacity: 1 }}
                    >
                        <FaSearch size={32} color="#e9e7f8" />
                    </button>
                </form>
                <div className="recently_searched">
                    <div className="title">
                        <h2>Recently searched</h2>
                    </div>
                    <div className="recently_searched-cards">
                        {searched.map((artistiSearched) => (
                            <Link to={`/artist/${artistiSearched.name}`}>
                                <div className="card">
                                    <img
                                        src={artistiSearched.image}
                                        alt={artistiSearched.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SearchContainer>
        </>
    );
}
