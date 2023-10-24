import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
text-decoration: none;
color: var(--main-color);
&:nth-child(1) {
margin-right: 10px
}

&:hover,
&:focus {
    color: var(--active-color);
  }

  &.active {
    color: var(--active-color);
  }
`

export const StyledNav = styled.div`
font-weight: 700;
font-size: 20px;
text-align: center;
`