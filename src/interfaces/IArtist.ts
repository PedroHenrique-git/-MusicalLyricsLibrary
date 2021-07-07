export interface IArtist {
    data: {
        artists: Array<{
            idArtist: string;
            strArtist: string;
            strLabel: string;
            intFormedYear: string;
            strStyle: string;
            strGenre: string;
            strWebsite: string;
            strFacebook: string;
            strTwitter: string;
            strBiographyEN: string;
            strGender: string;
            strArtistThumb: string;
            strArtistLogo: string;
            strArtistWideThumb: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}

export interface IAlbum {
    albumData: {
        album: Array<{
            idAlbum: string;
            strAlbumThumb: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}

export interface ITrack {
    data: {
        mvids: Array<{
            strMusicVid: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}
