import styled, { css } from 'styled-components';

import { FaUserCircle, FaClock } from 'react-icons/fa'

export const Container = styled.div`
    max-width: 850px;
    /* width: 100%; */
    margin:0 auto;
    /* border: 2.5px solid var(--border-post); */
    position: relative;
    padding: 15px 0 15px 0;
    background: var(--header-dark);
    overflow: hidden;

    /* >img{
        width: 100%;
        height: 24rem;
        object-fit: cover;
    } */
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    >img{
        /* width: 97%; */
        max-width: 100%;
        height: auto;
        /* height: 24rem; */
        object-fit: cover;
    }
`;

export const ContentWrapper = styled.div`
    /* display:flex;
    
    flex-direction: row; */
    /* position: relative; */
    /* max-width: 20%; */
    /* width: 1280px; */
    margin-left: 53px;
    border: 2.5px solid var(--border-post);
    /* max-width: 85%; */
    /* max-width: 97.5%; */
    padding: 0 1rem;
    padding-top: 4rem;

    @media screen and (min-width: 640px){
        /* padding: 0 1.5rem; */
        padding: 0 0.7rem 0 10px;
    }

    /* @media screen and (min-width: 1024px){
        padding: 0 0.7rem 0 10px;
    } */

`; 
export const TitlePost = styled.div`
    line-height: 1.75rem;
    max-width: 65ch;
    margin: 0 auto;
    >h1{
     cursor: pointer;
     margin-top: 0.5rem;
     display: block;
            
    color: #ffffff;
    line-height: 2.25rem;
    text-align: center;
    font-weight: 800;

    &:hover, &:focus{
       color: var(--title-post);
       transition: 0.2s color linear;
    }

    @media (min-width: 640px) {
    font-size: 1.625rem;
    line-height: 2.5rem
}   
    }

    >ul{
        display: flex;
        justify-content: center;
        margin-right: 5px;

        >li{
            display:flex;
            align-items: center;
            margin-left: 10px;
            

            >span{
                margin-left: 2px;
                font-family: Oswald, Arial, Helvetica, sans-serif;
                font-size: 12px;
                color: var(--description-dark);
                text-transform: uppercase;
            }
        }
    }
`;
export const MainContent = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    font-size: 17px;
    color: var(--post);
    margin-left: 0;
    /* margin: 0 auto; */
`;

const IconCss = css`
    width: 12px;
    height: 12px;
    fill: var(--description-dark);
    flex-shrink: 0;
`;

export const ProfileIcon = styled(FaUserCircle)`
    ${IconCss}
`;
export const ClockIcon = styled(FaClock)`
    ${IconCss}
`;




