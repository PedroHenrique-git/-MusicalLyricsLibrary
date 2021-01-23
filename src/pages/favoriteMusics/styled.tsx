import styled from 'styled-components';

export const MusicsContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ul {
        background: #9a9da8;
        border-radius: 4px;
        margin: 20px;
        padding: 20px;
        list-style: none;
        height: auto;

        li:first-child {
            font-size: 18px;
            font-weight: bolder;
            margin-bottom: 20px;
        }
    }
`;
