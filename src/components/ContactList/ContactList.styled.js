import styled from 'styled-components';

export const List = styled.li`
display: flex;
margin-bottom: 6px;
justify-content: space-between;
align-items: baseline;
border: 2px solid var(--main-color);
border-radius: 8px;
padding: 10px;
font-size: 18px;
`

export const ListItems = styled.ul`
display: flex;
flex-direction: column;
width: 400px;
margin: 0 auto;
`

export const Button = styled.button`
display: inline-block;
width: 60px;
height: 30px;
font-weight: 600;
font-size: 16px;
background-color: var(--active-color);
border-radius: 6px;
cursor: pointer;

&:hover,
&:focus {
    background-color: var(--main-color);
  }
`