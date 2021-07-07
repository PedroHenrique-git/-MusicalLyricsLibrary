import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const TracksContainer = styled.section`
    margin: 40px auto 0 auto !important;
    display: flex;
    gap: 50px;

    @media (max-width: 1546px) {
        justify-content: center;
    }

    @media (max-width: 1020px) {
        flex-direction: column;
    }

    iframe {
        min-height: 280px;
        min-width: 420px;

        @media (max-width: 1546px) {
            max-height: 280px;
            min-width: auto;
        }

        @media (max-width: 1020px) {
            max-height: 400px;
        }

        @media (max-width: 640px) {
            min-height: 280px;
            min-width: auto;
        }
    }

    .none_track {
        color: ${colors.fontColor};
        text-align: center;
        font-size: 40px;
    }
`;
