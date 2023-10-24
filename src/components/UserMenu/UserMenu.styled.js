import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: end;
gap: 30px;
margin-right: 20px;
`

export const Text = styled.p`
font-weight: 600;
font-size: 20px;
`

export const Button = styled.button`
display: inline-block;
margin-top: 10px;
width: 80px;
height: 40px;
font-weight: 600;
background-color: var(--active-color);
border-radius: 6px;
cursor: pointer;

&:hover,
&:focus {
    background-color: var(--main-color);
  }
`

export const Line = styled.div`
width: 100%;
border-bottom: 1px solid black;
`