
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: var(--header-dark);
    border: 1px solid var(--border);

    > header{
        display: flex;
        font-weight: 500;
        align-items: flex-start;
        flex-direction: column;

        >p{
        margin: 0 14px 10px 15px;
        font-size: 14px;
        color: var(--description-dark);
        letter-spacing: 0.1px;
        word-break: break-all;
        }
    }

`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    line-height: 1em;
    padding: 30px 30px 12px 16px;
    font-size: 16px;
    font-weight: 500;
    color: var(--title-dark);
    
    @media screen and (min-width:768px){
        font-size: 18px;
    }
`;

export const ImagePreview = styled.img`
    min-width: 100%;
    max-width: 100%;
    height: auto;

   
`;


export const ReadMore = styled.a`
    font-size: 14px;
    cursor: pointer;
    margin: 0 0 13px 14px;
    color: #ad60e9;
`;