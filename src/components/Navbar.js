import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <NavbarStyled>
      <ul>
        <Link to="/">
          <button onClick={() => props.reload()} className="nav-text">
            Home
          </button>
        </Link>
      </ul>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  padding: 3rem;

  button {
    border: none;
  }

  .nav-text {
    height: 50px;
    font-size: 1.3rem;
    font-weight: normal;
    padding: 0.5rem 1.5rem;
    border-radius: 10%;
    background-color: #2e4342;
    color: white;
    letter-spacing: 1.2px;
    cursor: pointer;
  }

  @media (max-width: 600px) {

    button {
      width: 100%;
    
    }

    .nav-text {
    border-radius: 4.5rem;
  }
  }
`;

export default Navbar;
