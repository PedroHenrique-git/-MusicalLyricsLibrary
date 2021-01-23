import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    background:rgba(76, 67, 92, 0.6);
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 200px;
    width: 100%;

    @media (max-width: 640px) {
        height: 320px;
        flex-direction: column;
    }

    input[type="text"] {
        border-radius: 10px;
        height: 40px;
        padding: 8px;
        font-size: 18px;
        border: 1px solid#9a9da8;
        margin-right: 20px;
        width: 350px;

        @media (max-width: 640px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 330px;
            margin: 20px 0;
        }
    }

    .btn {
        border-radius: 10px;
        height: 40px;
        padding: 8px;
        font-size: 18px;
        background: #e64041;
        border: none;
        cursor: pointer;
        width: 150px; 
        margin-right: 15px;

        @media (max-width: 640px) {
            margin-top: 15px;
        }
    }

    .btn-favorite {
        color: #000;
        height: auto;
        text-decoration: none;
        text-align: center;
    }
`;

export const LyricContainer = styled.div`
    margin: 50px 0;

    @media (max-width: 640px) {
        margin: 50px 30px;
    }

    ul {
        list-style: none;
    }
    p,.has-music {
        text-align: center;
    }
    .no-music {
        text-align: center;
        text-transform: uppercase;
        height: 50.5vh;
        font-size: 32px;
    }
    .title-music {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
`;
