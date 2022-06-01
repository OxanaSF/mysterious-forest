import styled from "styled-components";

import druidImg from "../../../assets/images/druid.jpg";

export const GuessNumberStyled = styled.section`
  .canvas {
    min-height: 100vh;
    background-image: url(${druidImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* opacity: 0.9; */
    z-index: 0;

    @keyframes marquee {
      0% {
        transform: translate3d(0, 0, 0);
      }

      100% {
        transform: translate3d(-200vw, 0, 0);
      }
    }

    .score {
      font-size: 1.7rem;
      background-color: white;
      background: radial-gradient(ellipse at center, #b8c6c6 0%, #448384 100%);
      padding: 0.4rem 3.5rem;
      height: 6rem;
      color: #551a8b;
      color: #554a8b;
      /* color: white; */
      display: flex;
      justify-content: center;
      align-items: center;

      border-top-left-radius: 2.1rem;
      border-top-right-radius: 2.1rem;
      font-family: "Lobster Two", cursive;
      letter-spacing: 2.8px;
    }

    .welcome-level {
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      text-align: center;
    }

    .quiz-container {
      width: 70%;
      min-height: 70vh;
      margin: auto;
      background-color: rgba(259, 259, 259, 0.6);
      border-radius: 3rem;
      box-shadow: inset 0 0 50px #707070;
      font-size: 2rem;

      h1 {
        cursor: pointer;
        font-family: "Lobster Two", cursive;
        color: #154a30;
        text-align: center;
      }

      p {
        width: 60%;
        font-size: 1.2rem;
        line-height: 1.9;
        letter-spacing: 2px;
        font-family: "Lobster Two";
      }

      .btn-start-quiz {
        margin: 3rem 0;
        background: radial-gradient(
          ellipse at center,
          #b8c6c6 0%,
          #448384 100%
        );
        height: 130px;
        width: 130px;
        padding: 1.5rem;
        color: white;
        font-size: 1.5rem;
        letter-spacing: 2px;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        z-index: 2;
      }
    }

    @media (max-width: 430px) {
      .quiz-container {
        width: 90%;
        padding-bottom: 4rem;
      }

      .welcome-level {
        padding-bottom: 2rem;

        h1 {
          margin-top: 3rem;
          font-size: 2.7rem;
        }

        p {
          width: 90%;
          font-size: 1rem;
          line-height: 1.9;
        }

        button {
          padding: 0;
        }

        .btn-start-quiz {
          margin: 0rem;
          height: 120px;
          width: 120px;
          font-size: 1.3rem;
          letter-spacing: 2px;
        }
      }
    }
  }
`;
