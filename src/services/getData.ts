import useSWR from 'swr';
import { IAlbum, IArtist, ITrack } from '../interfaces/IArtist';

const baseUrl = 'https://www.theaudiodb.com/api/v1/json/1/';

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());

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
