import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormFlex = styled(Form)`
display: flex;
gap: 16px;
justify-content: center;
align-items: center;
padding: 12px 16px;
`

export const FieldFlex = styled(Field)`
height: 30px;
`

export const Box = styled.label`
display: flex;
align-items: center;
gap: 8px;
font-weight: 600;
font-size: 18px;
`

export const Button = styled.button`
display: inline-block;
margin-top: 10px;
width: 80px;
height: 50px;
font-weight: 600;
background-color: var(--active-color);
border-radius: 6px;
cursor: pointer;

&:hover,
&:focus {
    background-color: var(--main-color);
  }
`