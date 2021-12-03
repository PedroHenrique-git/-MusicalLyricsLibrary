import useSWR from 'swr';
import IAlbum from '../interfaces/IAlbum';
import IAlbumTrack from '../interfaces/IAlbumTrack';
import IArtist from '../interfaces/IArtist';
import ITrack from '../interfaces/ITrack';

export const baseUrl = 'https://www.theaudiodb.com/api/v1/json/2';

const fetcher = (url: string): Promise<any> =>
    fetch(url).then((resp) => resp.json());

export function useArtist(name: string): IArtist {
    const { data, error } = useSWR(`${baseUrl}/search.php?s=${name}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}

export function useAlbum(id: string): IAlbum {
    const { data, error } = useSWR(`${baseUrl}/album.php?i=${id}`, fetcher);

    return {
        albumData: data,
        isLoading: !data && !error,
        isError: error,
    };
}

export function useTrack(id: string): ITrack {
    const { data, error } = useSWR(`${baseUrl}/mvid.php?i=${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}

export function useAlbumTracks(id: string): IAlbumTrack {
    const { data, error } = useSWR(`${baseUrl}/track.php?m=${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
