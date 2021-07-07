import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const MainContainer = styled.main`
    background: rgba(28, 32, 44, 0.8);
    max-width: 100%;
    padding: 25px;
    margin: 0 auto;

    section {
        max-width: 1200px;
        margin: 0 auto;
    }

    h1 {
        color: ${colors.fontColor};
        font-size: 70px;
        text-align: center;

        @media (max-width: 640px) {
            font-size: 55px;
        }
    }

    .artist_logo {
        display: flex;
        align-content: center;
        justify-content: center;
        max-width: 100%;
        h1 {
            width: 100%;

            img {
                height: 100%;
                max-width: 100%;
            }
        }
    }

    .artist_informations {
        a {
            text-decoration: none;
        }
        .artist_informations-data,
        .artist_informations-social-medias {
            display: flex;
            flex-direction: column;

            li,
            a {
                color: ${colors.fontColor};
                list-style: none;
                font-size: 20px;
                text-decoration: none;
            }
        }

        .artist_informations-social-medias {
            margin-top: 20px;
        }

        p {
            color: ${colors.fontColor};
            font-size: 16px;
            margin: 20px 0;
            text-align: left;
            max-height: 400px;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 0.4em;
            }

            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${colors.fontColor};
                outline: 1px solid slategrey;
            }
        }
    }

    .artist_informations-image {
        margin: 30px auto 0 auto;
        max-height: 700px;
        max-width: 700px;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .album-container,
    .tracks-container {
        margin-top: 80px;
    }
`;
