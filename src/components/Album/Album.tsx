import { Link } from 'react-router-dom';
import { useAlbum } from '../../services/getData';
import { Albums } from './style';
import gif from '../../images/load-image-gif.gif';
import isEmpty from '../../utils/isEmpty';

export default function Album({ id }: { id: string }): JSX.Element {
    const { albumData, isLoading, isError } = useAlbum(id);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <Albums>
            {albumData.album.map((album) => (
                <Link to={`/album/${album.idArtist}/${album.idAlbum}`}>
                    <div className="album">
                        <img
                            src={
                                !isLoading ? isEmpty(album.strAlbumThumb) : gif
                            }
                            alt={album.idAlbum}
                        />
                    </div>
                </Link>
            ))}
        </Albums>
    );
}
