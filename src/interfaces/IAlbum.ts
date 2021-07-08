export default interface IAlbum {
    albumData: {
        album: Array<{
            idAlbum: string;
            idArtist: string;
            strAlbumThumb: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}
