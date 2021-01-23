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
        width: auto;
        height: auto;
        
        .btn-delete {
            background: #eb7979;
            border: none;
            cursor: pointer;
            outline: none;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            font-size: 18px;
        }

        li:nth-of-type(2) {
            font-size: 18px;
            font-weight: bolder;
            margin: 20px 0;
        }
    }
`;
