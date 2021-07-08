export default interface IAlbumTrack {
    data: {
        track: Array<{
            strAlbum: string;
            strTrack: string;
            idAlbum: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}
