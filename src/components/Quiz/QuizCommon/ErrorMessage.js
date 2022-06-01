import styled from "styled-components";

const ErrorMessage = ({ children }) => {
  return (
    <errorMessageStyled className="error-message">
      {children}
    </errorMessageStyled>
  );
};

const errorMessageStyled = styled.p`
  .error-message {
    text-align: center;
    color: #c72c22;
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`;

export default ErrorMessage;
