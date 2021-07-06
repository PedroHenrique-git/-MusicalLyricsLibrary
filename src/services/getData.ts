import useSWR from 'swr';
import { IArtist } from '../interfaces/IArtist';

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
