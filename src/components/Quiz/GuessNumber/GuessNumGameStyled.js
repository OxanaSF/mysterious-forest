import styled from "styled-components";


export const GuessNumGameStyled = styled.section`
   .guess-num-wrapper {
    font-family: "Lobster Two", cursive;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-size: 2.1rem;
    padding: 2.5rem;
  }

  h2 {
    margin-top: 5rem;
    font-size: 2rem;
    color: #045860;
  }

  h3 {
    font-size: 2.5rem !important;
    color: #93578f;
  }

  .type-here {
    font-size: 1rem !important;
    letter-spacing: 3px !important;
  }
  p {
    text-align: center;
    font-size: 2.5rem !important;
  }

  input {
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #448384 100%);
    width: 130px;
    height: 130px;
    border: none;
    border-radius: 50%;
    font-size: 100%;
    text-align: center;
    color: #265b5c;
    letter-spacing: 1.5px;
  }

  input:focus {
    outline: none;
  }

  img {
    width: 10rem;
  }

  .guesses {
    border: 1px solid #448384;
    padding: 0.5rem 4rem;
    border-radius: 5px;
    color: #01526e;
    color: #045860;
  }

  .guess {
    text-align: center;
  }

  button {
    font-family: "Lobster Two", cursive;
    color: black;
    letter-spacing: 2.5px !important;
    width: 380px;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    letter-spacing: 1px;
    background: radial-gradient(ellipse at center, #b8c6c6 0%, #448384 100%);
  }

  @media (max-width: 600px) {
    margin-bottom: 4rem;

    .guess-num-wrapper {
      gap: 0;
    }

    h1 {
      font-size: 1.2rem;
      padding: 2.5rem;
    }

    h2 {
      font-size: 2rem !important;
    }

    h3 {
      font-size: 1.2rem;
      text-align: center;
      color: #045860;
      color: #93578f;
    }

    .type-here {
      font-size: 1rem !important;
    }

    input {
      margin: 1rem 0;
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 50%;
      font-size: 100%;
      text-align: center;
      color: #265b5c;
      letter-spacing: 1.5px;
    }

    button {
      width: 80%;
    }

    .guesses {
      margin: 1rem auto;
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      text-align: center;
      margin: 2rem;
    }
  }

`



export const FailedScreenStyled = styled.div`
.display-failed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin-top: 2rem;
}

h1 {
  letter-spacing: 2px;
}

.display-failed-btns {
  margin-bottom: 10rem;
}

button {
  width: 8rem;
  margin: 0 1.5rem;
  border-radius: 50%;
  padding: 2.6rem 1rem;
  border: 2px solid #434a46;
  letter-spacing: 2px;

  background: radial-gradient(
    ellipse at center,
    transparent 46%,
    #707d76 96%,
    #434a46 100%
  );
  animation-name: grow-shrink;
  opacity: 0.5;
  transition: opacity 0.9s ease-in-out;

  font-size: 2rem;
  cursor: pointer;

  @keyframes grow-shrink {
    40% {
      transform: scale(1.5);
    }
    80% {
      transform: scale(1);
    }
  }
}
`;
