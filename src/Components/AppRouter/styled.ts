import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #130f35;
  color: #fff;
  gap: 20px;
  padding: 0px 25px;
`;
export const NavItem = styled(NavLink)`
  height: 25px;
  text-decoration: none;
  color: #fff;
  &.active {
    color: rgb(236, 9, 130);
  }
`;