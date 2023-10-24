import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth"
import { logOut } from "redux/Auth/authOperations";
import { Button, Container, Line, Text } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
        return ( <>
            <Container>
            <Text>Welcome, {user.name}!</Text>
            <Button button onClick={() => dispatch(logOut())}>Logout</Button>
    </Container>
            <Line></Line>
        </>
    )
}