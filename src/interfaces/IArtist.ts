export interface IArtist {
    data: {
        artists: Array<{
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
            intMembers: string;
            strCountry: string;
            strCountryCode: string;
            strArtistThumb: string;
            strArtistLogo: string;
            strArtistWideThumb: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}
