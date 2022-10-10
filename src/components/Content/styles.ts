import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 16px;

  > div{
    margin-top: 8px;
    display: grid;
    grid-gap: 25px;

    grid-template-columns: 1fr;

    @media screen and (min-width:768px){
      grid-template-columns: 1fr 1fr;
    } 

    @media screen and (min-width: 1280px){
      grid-template-columns: 1fr 1fr 1fr;

    }
  }
`;
