import { Link } from 'react-router-dom';
import { useAlbum } from '../../services/getData';
import { Albums } from './style';
import def from '../../images/default.jpg';

export default function Album({ id }: { id: string }): JSX.Element {
    const { albumData, isLoading, isError } = useAlbum(id);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <Albums>
            {albumData.album.map((album) => (
                <Link to={`/album/${album.idAlbum}`}>
                    <div className="album">
                        <img
                            src={
                                album.strAlbumThumb ? album.strAlbumThumb : def
                            }
                            alt={album.idAlbum}
                        />
                    </div>
                </Link>
            ))}
        </Albums>
    );
}
