import { useParams, useHistory } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import { useAlbum, useAlbumTracks } from '../../services/getData';
import { AlbumContainer } from './style';
import Loading from '../../components/Loading/Loading';
import gif from '../../images/load-image-gif.gif';
import isEmpty from '../../utils/isEmpty';

export default function AlbumPage(): JSX.Element {
    const { artistId, albumId } =
        useParams<{ artistId: string; albumId: string }>();
    const { data, isError, isLoading } = useAlbumTracks(albumId);
    const {
        albumData,
        isError: albumError,
        isLoading: albumLoading,
    } = useAlbum(artistId);
    const history = useHistory();

    if (isLoading || albumLoading) return <Loading />;

    if (isError || albumError) return <h1>Error...</h1>;

    return (
        <AlbumContainer>
            <section>
                <button
                    className="prev_button"
                    type="button"
                    onClick={() => history.goBack()}
                >
                    <IoMdReturnLeft size={50} color="#d8d8d8" />
                </button>
                <h1 className="album_title">{data.track[0].strAlbum}</h1>
                <img
                    className="album_tumb"
                    src={
                        !isLoading || !albumLoading
                            ? isEmpty(
                                  albumData.album.find(
                                      (album) => album.idAlbum === albumId
                                  )?.strAlbumThumb
                              )
                            : gif
                    }
                    alt={
                        albumData.album.find(
                            (album) => album.idAlbum === albumId
                        )?.idAlbum
                    }
                />
                <ul className="album_tracks">
                    {data.track.map((track) => (
                        <li>
                            <h1>{track.strTrack}</h1>
                        </li>
                    ))}
                </ul>
            </section>
        </AlbumContainer>
    );
}
