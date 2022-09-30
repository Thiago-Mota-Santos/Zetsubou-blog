import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  margin-top: 16px;

  > div{
    margin-top: 8px;
    display: grid;
    grid-gap: 25px;

    grid-template-columns: 1fr;

    @media screen and (min-width:768px){
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 980px){
      grid-template-columns: 1fr 1fr 1fr;

    }
  }
`;
