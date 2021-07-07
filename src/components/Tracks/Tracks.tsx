import { useTrack } from '../../services/getData';
import { TracksContainer } from './style';

export default function Tracks({ id }: { id: string }): JSX.Element {
    const { data, isLoading, isError } = useTrack(id);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    const randomIndex = (max: number, min: number): number =>
        Math.floor(
            Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
        );

    if (!data.mvids) {
        return (
            <TracksContainer style={{ justifyContent: 'center' }}>
                <p className="none_track">None track</p>
            </TracksContainer>
        );
    }

    return (
        <TracksContainer>
            <iframe
                src={`https://www.youtube.com/embed/${
                    data.mvids[
                        randomIndex(data.mvids.length, 0)
                    ].strMusicVid.split('?v=')[1]
                }`}
                frameBorder="0"
                title="track_1"
            />
            <iframe
                src={`https://www.youtube.com/embed/${
                    data.mvids[
                        randomIndex(data.mvids.length, 0)
                    ].strMusicVid.split('?v=')[1]
                }`}
                frameBorder="0"
                title="track_2"
            />
            <iframe
                src={`https://www.youtube.com/embed/${
                    data.mvids[
                        randomIndex(data.mvids.length, 0)
                    ].strMusicVid.split('?v=')[1]
                }`}
                frameBorder="0"
                title="track_3"
            />
        </TracksContainer>
    );
}
