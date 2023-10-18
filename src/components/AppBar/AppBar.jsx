import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useAuth } from "hooks/useAuth";
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppBar = () => {
    const {isLoggedIn} = useAuth()
    return (
    <div>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
    </div>
    )
}