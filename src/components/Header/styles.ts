import { FaBars, FaTimes } from 'react-icons/fa';
import styled, {css} from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    z-index: 2;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    top: 0;
    height: 54px;
    align-items: center;
    padding: 11px 20px;
   
    background: var(--header-dark);
`;

export const NavMenu = styled.ul`
    display:flex;
    width: 100%;
    margin-left: -20px;

    @media screen and (max-width: 960px){
      display: flex;
      flex-direction: column;
      opacity: ${({ click }) => (click ? '1' : '0')};
      transition: all 0.8s ease;
      width: 100%;
      height: 30vh;
      position: absolute;
      top: 50px;
      background: var(--header-dark);
    }
    
    >li{
        margin-left: 25px;
        font-size: 14px;
        cursor:pointer;
        margin-top: 5px;

        > a{
        color:var(--header-item); 
        text-decoration: none;

        &:hover{
            color:var(--header-item-hover);
            transition: color 0.5s ease-out;

          
        }
      }   
    }
    
  
`;

const IconCss = css`
  fill: var(--header-item);
  width: 19px;
  height: 19px;
`;

export const MenuIcon = styled(FaTimes)`
  ${IconCss};

`

export const XIcon = styled(FaBars)`
  ${IconCss};
`;



export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    display: block;
    padding: 5px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    /* font-size: 1.8rem; */
    cursor: pointer;
    
  }
`;
