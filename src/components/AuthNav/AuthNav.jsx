import { Link, StyledNav } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <StyledNav>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Log In</Link>
        </StyledNav>
)
}