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
        flex-direction: column;
    }

    input {
        border-radius: 10px;
        height: 40px;
        padding: 8px;
        font-size: 18px;
    }

    input[type="text"] {
        border: 1px solid#9a9da8;
        margin-right: 20px;
        width: 350px;

        @media (max-width: 640px) {
            margin: 20px 0;
        }
    }

    input[type="submit"] {
        background: #e64041;
        border: none;
        cursor: pointer;
        width: 150px;   
    }
`;

export const LyricContainer = styled.div`
    margin: 50px 0;
    p {
        text-align: center;
    }
`;
