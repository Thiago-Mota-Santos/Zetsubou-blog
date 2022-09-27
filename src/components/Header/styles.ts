import styled from 'styled-components';

export const Container = styled.div`
    height: 54px;
    display: flex;
    align-items: center;
    padding: 11px 30px;
    background: var(--header);

   >div{
    display:flex;
    width: 100%;
    margin-left: 30px;
    
    >h1{
        margin-left: 20px;
        font-size: 14px;
        color:var(--HeaderItemColor);

        &:hover{
            color:var(--HeaderItemColorHover);
            transition: color 0.5s ease-out;
        }
    }
    
   }
`;

