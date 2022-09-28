import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 303px;
    height: 500px;
    background: var(--header);

`;

export const ImagePreview = styled.img`
    width: 303px;
    height: 190px;
`;
export const Title = styled.a`
    margin-top: 30px;
    font-size: 18px;
    color: rgb(232, 230, 227);
`;
export const  SubTitle = styled.span`
    font-size: 14px;
    color: rgb(232, 230, 227);

`;
export const  Description = styled.p`
    font-size: 14px;
    color: rgb(232, 230, 227);
`;
export const  ReadMore = styled.a`
    font-size: 14px;
    margin-top: 80px;
    margin-left: 0;
    color: purple;
`;