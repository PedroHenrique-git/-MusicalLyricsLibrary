import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const AlbumContainer = styled.main`
    background: rgba(28, 32, 44, 0.8);
    max-width: 100%;
    padding: 25px;
    margin: 0 auto;

    section {
        padding: 25px;
        max-width: 1200px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .prev_button {
            border: none;
            cursor: pointer;
            background: transparent;
            outline: none;
        }

        .album_title {
            color: ${colors.fontColor};
            font-size: 2.6em;

            @media (max-width: 640px) {
                text-align: center;
            }
        }

        .album_tumb {
            max-height: 400px;
            max-width: 400px;
            margin: 25px 0;
        }

        .album_tracks {
            li {
                border-bottom: 1px solid ${colors.fontColor};
                padding-bottom: 10px;
                margin: 10px 0;
                color: ${colors.fontColor};
                list-style: none;
                font-size: 1em;
                text-align: center;
            }
        }
    }
`;
