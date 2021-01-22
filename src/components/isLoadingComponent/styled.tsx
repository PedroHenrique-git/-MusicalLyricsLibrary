import styled from 'styled-components';

export const IsLoadingComponent = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex; 
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);

    h1 {
        color: #fff;
        font-size: 32px;
        text-transform: uppercase;
    }
`;
