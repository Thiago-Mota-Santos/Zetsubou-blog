import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link'

export const HeaderMenu = styled.header`
  color: #ccc;
  background-color: #111;
  font-family: sans-serif;
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  
  a {
    margin-right: 1rem;
    color: #ccc;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
 
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  > a {
    margin-left: 0.5rem;
    color: #ccc;
    text-decoration: none;


    &:hover{
      color: white
    }

  }
`;


export const  LogoImage = styled(Image)`
  color: white;
  align-items: center;


  a {
    margin-left: 1rem;
    color: #ccc;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

`;


