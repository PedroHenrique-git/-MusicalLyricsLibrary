import styled from 'styled-components';

export const Albums = styled.div`
    margin-top: 40px;

    display: grid;
    align-content: center;
    justify-content: center;
    gap: 20px;
    grid-template-columns: repeat(4, 0.22234fr);

    @media (max-width: 640px) {
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
    }

    a {
        display: block;
        height: 100%;
        width: 100%;
    }

    .album {
        height: 100%;
        width: 100%;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        &:hover {
            transform: scale(1.3);
            transition: all 0.3s;
        }
    }
`;
