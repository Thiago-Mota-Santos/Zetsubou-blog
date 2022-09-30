import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: sticky;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    top: 0;
    height: 54px;
    align-items: center;
    padding: 11px 30px;
    background: var(--header-dark);

   >div{
    display:flex;
    width: 100%;
    margin-left: 30px;
    
    >h1{
        margin-left: 20px;
        font-size: 14px;
        cursor:pointer;
        color:var(--header-item);

        &:hover{
            color:var(--header-item-hover);
            transition: color 0.5s ease-out;
        }
    }
    
   }
`;

