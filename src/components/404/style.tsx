import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const NotFoundContainer = styled.div`
    background: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        height: auto;
        width: 300px;
    }

    a {
        background: #071307;
        color: ${colors.fontColor};
        font-size: 1.8em;
        display: block;
        height: 45px;
        padding: 10px;
        margin: 8px 0;
        text-decoration: none;
        text-align: center;
        width: 240px;
    }
`;
