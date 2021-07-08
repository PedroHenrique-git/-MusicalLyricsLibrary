import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { SearchContainer, BackgroundContainer } from './style';

export default function Index(): JSX.Element {
    const [artist, setArtist] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
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
                        onChange={(e) => setArtist(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={!artist}
                        style={!artist ? { opacity: 0.5 } : { opacity: 1 }}
                    >
                        <FaSearch size={32} color="#e9e7f8" />
                    </button>
                </form>
            </SearchContainer>
        </>
    );
}
