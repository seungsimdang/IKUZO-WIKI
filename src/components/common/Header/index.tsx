import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import headerIconSvg from '../../../assets/logo.png';

interface StyledHeaderProps {
  transparent: boolean;
}

const HeaderWrapper = styled.div<StyledHeaderProps>`
  font-family: 'SBAggroB';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  color: #ffd850;
  font-weight: 700;
  background-color: ${props => {
    return props.transparent ? 'rgba(57, 57, 57, 0.5)' : '#393939';
  }};
  padding: 0 10%;
  z-index: 9;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const HeaderIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const LeftTitle = styled.h1`
  font-size: 1.2rem;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

const RightItem = styled.li`
  margin: 0.5rem;
`;

const NavItem = styled(NavLink)`
  color: var(--color-white);
  text-decoration: none;

  &.active {
    color: var(--color-primary);
  }
`;

const RightList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledHeader: React.FC<StyledHeaderProps> = ({ transparent }) => {
  const handleGoToHome = () => {
    window.location.href = '/';
  };

  return (
    <HeaderWrapper transparent={transparent}>
      <LeftWrapper>
        <HeaderIcon
          src={headerIconSvg}
          alt="headerIcon"
        />
        <LeftTitle onClick={handleGoToHome}>IKUZO</LeftTitle>
      </LeftWrapper>
      <RightWrapper>
        <RightList>
          <RightItem>
            <NavItem
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__default';
              }}
              to="/"
            >
              Home
            </NavItem>
          </RightItem>
          <RightItem>
            <NavItem
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__default';
              }}
              to="/wiki"
            >
              Wiki
            </NavItem>
          </RightItem>
          <RightItem>
            <NavItem
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__default';
              }}
              to="/gallery"
            >
              Gallery
            </NavItem>
          </RightItem>
        </RightList>
        {/* Mypage보기 버튼 주석처리
        <MyPageButton className="btn btn-primary" type="button">
          MYPAGE보기
        </MyPageButton> */}
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default StyledHeader;
