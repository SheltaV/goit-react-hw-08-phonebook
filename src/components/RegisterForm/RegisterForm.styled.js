import styled from 'styled-components';


export const FormContainer = styled.form`
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
margin-top: 30px;
padding: 16px;
`

export const Form = styled.div`
width: 30%;
display: flex;
gap: 10px;
margin-bottom: 10px;
justify-content: space-between;
`

export const Label = styled.label`
font-weight: 600;
`

export const Input = styled.input`
height: 25px;
`

export const Button = styled.button`
display: inline-block;
margin-top: 10px;
width: 200px;
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