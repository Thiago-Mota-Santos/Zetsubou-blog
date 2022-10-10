import styled, { css } from 'styled-components';

import { FaUserCircle, FaClock } from 'react-icons/fa'

export const Container = styled.div`
    max-width: 850px;
    margin:0 auto;
    position: relative;
    padding: 15px 0 15px 0;
    background: var(--header-dark);
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    >img{
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const ContentWrapper = styled.div`
    margin-left: 53px;
    border: 2.5px solid var(--border-post);
    padding: 0 0.7rem 0 10px;
    

`; 
export const TitlePost = styled.div`
    line-height: 1.75rem;  
    margin: 0 auto;
    >h1{
     font-size: 26px;
     cursor: pointer;
     margin-top: 0.5rem;
     display: block;
            
    color: #ffffff;
    text-align: center;
    font-weight: 800;

    &:hover, &:focus{
       color: var(--title-post);
       transition: 0.2s color linear;
    }

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

                @media screen and (max-width: 330px){
                    font-size: 7.5px;
                    
                }
            }
        }
`;

export const Preview = styled.p`
    margin: 5px 0 30px 0;
    font-size: 18px;
    color: #beb9b0;   
`;

export const MainContent = styled.p`
    margin-top: 1.5rem;
    width: 100%;
    font-size: 18px;
    color: #beb9b0;
    margin-left: 0;
    margin-bottom: 20px;

    >hr{
        border-bottom: 1px dotted rgb(69, 74, 77);
        margin-bottom: 20px;
    }
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




