import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth"
import { logOut } from "redux/Auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
    <div>
            <p>Welcome, {user.usename}</p>
        <button button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
    )
}