import { useAuth } from 'hooks/useAuth';
import { Link, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  const {isLoggedIn} = useAuth()
    return (
        <StyledNav>
      <Link to="/">
        Home
        </Link>
         {isLoggedIn && <Link to="/contacts">
          Contacts
        </Link>}
    </StyledNav>
    )
}