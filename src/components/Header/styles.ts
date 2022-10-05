import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    z-index: 2;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    top: 0;
    height: 54px;
    align-items: center;
    padding: 11px 30px;
    background: var(--header-dark);

   >ul{
    display:flex;
    width: 100%;
    margin-left: 30px;
    
    >li{
        margin-left: 20px;
        font-size: 14px;
        cursor:pointer;

        > a{
        color:var(--header-item);
        text-decoration: none;

        &:hover{
            color:var(--header-item-hover);
            transition: color 0.5s ease-out;
        }
      }   
    }
    
   }
`;

