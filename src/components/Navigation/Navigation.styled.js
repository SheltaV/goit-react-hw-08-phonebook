import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
text-decoration: none;
color: var(--main-color);

&:hover,
&:focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }

  &:nth-child(1) {
margin-right: 10px
}
`

export const StyledNav = styled.nav`
font-weight: 700;
font-size: 30px;
text-align: center;
margin-bottom: 5px;
`