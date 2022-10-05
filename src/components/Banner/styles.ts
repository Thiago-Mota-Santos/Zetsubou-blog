import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  justify-content: center;
  z-index: 1;
  
  

  >img{
   margin: 0 auto;
   width: 100%;
   min-width: 95%;
   max-width: 100%;
   width: 100%;
   object-fit: cover;
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

    @media screen and (max-width: 768px){
        text-align: center;
        border-radius: 30px;
        width: auto;
        margin: auto;

        >header{
            margin-top: -12px;

            >h1{
                font-size: 20px;
            }
            >p{
                font-size: 12px;
            }
        }
    }
 @media screen and (max-width: 480px){
    background: none; ;
 }
`;  
