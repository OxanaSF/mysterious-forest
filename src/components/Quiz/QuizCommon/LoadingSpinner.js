import styled from "styled-components";

const LoadingSpinner = (props) => {
  const {
    size = "4rem",
    borderWidth = "0.2em",
    spinnerColor = "#551a8b",
    backgroundColor = "rgba(85, 26, 139, 0.7)",
    screenReaderMessage = "Loading...",
    style = {},
  } = props;

  const loaderStyle = {
    width: size,
    height: size,
    borderColor: backgroundColor,
    borderWidth,
    borderLeftColor: spinnerColor,
    ...style,
  };

  return (
    <LoadingSpinnerStyled className="loading-spinner">
      <div
        className="loading-spinner__spinner"
        style={loaderStyle}
        aria-label={screenReaderMessage}
      />
    </LoadingSpinnerStyled>
  );
};

const LoadingSpinnerStyled = styled.div`
  .loading-spinner {
    text-align: center;
    position: relative;
  }

  .loading-spinner__spinner {
    display: inline-block;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    vertical-align: text-bottom;
    border-style: solid;
    border-right-color: transparent;
    animation: loading-spinner 0.9s linear infinite;
  }

  @keyframes loading-spinner {
    0% {
      transform: rotate(0deg) translateZ(0);
    }
    100% {
      transform: rotate(360deg) translateZ(0);
    }
  }
`;

export default LoadingSpinner;
