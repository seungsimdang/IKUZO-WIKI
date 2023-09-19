import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AddModal from './AddModal';
import sidebar from '../../../assets/sidebar.svg';

const SidebarWikiWrapper = styled.div`
  width: 12rem;
  height: 30rem;
  padding: 2rem;

  background-color: var(--color-beige);
  border-radius: 1rem;
  color: var(--color-black);
  box-shadow: 0 0.2rem 0.2rem 0 #c3c3c3;

  .sidebar__wiki--header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.2rem;

    .sidebar__wiki--icon {
      width: 2rem;
      color: #ffa800;
    }

    a {
      text-decoration: none;
      color: var(--color-black);
    }

    h2 {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }
  }

  ul {
    font-size: 0.8rem;
  }

  li {
    margin-bottom: 0.7rem;
  }

  .sidebar__wiki--items.active {
    font-weight: bold;
    color: #ffa800;
  }

  .sidebar__wiki--items:hover {
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
    padding: 0.8rem 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-black);
  display: block;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  transition: 0.5s;

  &:hover {
    text-decoration: none;
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
  }

  &.active {
    font-weight: bold;
    color: #ffa800;
  }
`;

const AddButton = styled.button`
  width: 190px;
  height: 35px;
  background-color: var(--color-primary);

  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 4px #9c9c9c;
  cursor: pointer;
`;

const SidebarGallery = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <SidebarWikiWrapper>
      <div className="sidebar__wiki--header">
        <img
          className="sidebar__wiki--icon"
          src={sidebar}
          alt="sidebar"
        />
        <h2>맛집 추천</h2>
      </div>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/gallery/korean">한식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/chinese">중식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/japanese">일식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/western">양식</StyledNavLink>
          </li>
        </ul>
      </nav>
      <AddButton onClick={handleModal}>맛집 추가하기</AddButton>
      {modal === true ? <AddModal onChange={handleModal} /> : null}
    </SidebarWikiWrapper>
  );
};

export default SidebarGallery;
