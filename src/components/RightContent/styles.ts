import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  margin: 80px 20px 0 0;
  padding: 20px;

  @media screen and (max-width: 890px) {
    margin-left: 30px;
    width: 98.8%;
  }

`;


export const Box = styled.div`


  >ol{
    margin: 0;
    padding: 0 0 0 1.2em;
    list-style: decimal;
    
    >li{
      margin: 5px 0 0 0;
      padding: 6px 0px 6px 0px;
      color:var(--description-dark);
      font-size: 13px;
      font-family: Domine, Arial, Helvetica, sans-serif;
      border-bottom: 1px solid var(--border-bottom-ol);
    }

    li:last-child{
      padding-bottom: 0;
      border-bottom:none;
    }
  }

`; 

export const Title = styled.h2`
  background-color: var(--background-box);
  font-size: 14px;
  line-height: 1;
  margin: -10px -10px 10px -10px;
  padding: 0;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-post);
  position: relative;
  text-align: center;

  >span{
    font-family: Oswald, Arial, Helvetica, sans-serif;
    color: #e4e4e4;
    font-weight:400;
    padding: 7px 10px;
    display: block;
    position: relative;
  }
`;

export const TopFictionList = styled.div`
  padding: 11px;
  border: 1px solid var(--border-post);

  >h2{
    border-bottom: 1px solid var(--border-bottom);
    padding: 7px 10px;
    display: block;
    position: relative;

  }

`;