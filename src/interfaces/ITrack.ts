export default interface ITrack {
    data: {
        mvids: Array<{
            strMusicVid: string;
        }>;
    };
    isLoading: boolean;
    isError: null;
}
