import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  box-shadow: inset 0 0 8px #707070;
  background-color: #2e4342;
  color: white;
  letter-spacing: 0.1rem;

  @media (max-width: 880px) {
    font-size: 0.8rem;
    min-height: 4rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6rem;
    min-height: 3rem;
  }
`;

export default Footer;
