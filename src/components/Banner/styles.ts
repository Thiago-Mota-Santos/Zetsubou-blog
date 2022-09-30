import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  justify-content: center;
  z-index: 1;
  


  >img{
   /* margin: 0 auto; */
   min-width: 95%;
   max-width: 100%;
   height: auto;

}

`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 900px;
    align-items: center;
    position: absolute;
    background: var(--border-banner);
    padding: 40px;
    border-radius: 78px;

    >header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -16px;

        >h1{
            color: var(--title-banner);
            font-size: 46px;
            font-weight: 300;
        }

        >p{
            color: var(--title-banner);
        }
    }
   
`;  
