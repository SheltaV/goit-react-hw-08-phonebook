import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/authOperations";
import { Button, Form, FormContainer, Input, Label } from "../RegisterForm/RegisterForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
    return (
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Form>
      <Label>Email</Label>
        <Input type="email" name="email" />
        </Form>
        <Form>
      <Label>Password</Label>
        <Input type="password" name="password" />
      </Form>
      <Button type="submit">Log in</Button>
    </FormContainer>
    )
}