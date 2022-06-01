import styled from "styled-components";

import lakeImg from "../../../assets/images/lake1.jpg";

export const QuizMediumStyled = styled.section`
  .canvas {
    min-height: 100vh;
    background-image: url(${lakeImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;

    .fog-anime {
      padding-bottom: 5rem;
    }

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
      background: radial-gradient(
        ellipse at center,
        #b3cbdb 0%,
        #809eb2 35%,
        #0d4051 100%
      );
      height: 6rem;
      color: #551a8b;
      color: #554a8b;

      display: flex;
      justify-content: center;
      align-items: center;

      border-top-left-radius: 2.1rem;
      border-top-right-radius: 2.1rem;
      font-family: "Lobster Two", cursive;
      letter-spacing: 2.8px;
    }

    .welcome-level {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .categories {
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;

        .btn-bubble {
          color: white;
          background-color: #0d4056;
          background-color: #0d4051;
          background-repeat: no-repeat;
          padding: 1.2rem 1rem;
          border: none;
          border-radius: 1rem;
          letter-spacing: 2px;
          font-size: 1rem;
          cursor: pointer;
        }
        .btn-bubble:hover,
        .btn-bubble:focus {
          -webkit-animation: bubbles 1s forwards ease-out;
          animation: bubbles 1s forwards ease-out;
          background: radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              ) -6% 121% / 0.88em 0.88em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              62% 114% / 0.68em 0.68em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              41% 112% / 1.16em 1.16em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              19% 129% / 0.82em 0.82em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              ) -3% 117% / 1.09em 1.09em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              71% 102% / 0.68em 0.68em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              70% 87% / 0.66em 0.66em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              70% 98% / 1.12em 1.12em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              87% 126% / 0.87em 0.87em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              44% 132% / 0.76em 0.76em,
            radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 30%,
                #eeeeff 60%,
                #eeeeff 65%,
                rgba(0, 0, 0, 0) 70%
              )
              87% 113% / 1.11em 1.11em;
          background-color: #0d4056;
          background-repeat: no-repeat;
        }

        @-webkit-keyframes bubbles {
          100% {
            background-position: -6% -53%, 61% -190%, 46% -50%, 19% -96%, 5% 29%,
              77% -22%, 76% -256%, 78% -330%, 79% -252%, 44% -188%, 79% -314%;
            box-shadow: inset 0 -6.5em 0 #1d7d97;
          }
        }

        @keyframes bubbles {
          100% {
            background-position: -6% -53%, 61% -190%, 46% -50%, 19% -96%, 5% 29%,
              77% -22%, 76% -256%, 78% -330%, 79% -252%, 44% -188%, 79% -314%;
            box-shadow: inset 0 -6.5em 0 #1d7d97;
          }
        }
      }
    }

    .quiz-container {
      width: 70%;
      margin: auto;
      background-color: rgba(259, 259, 259, 0.5);
      border-radius: 3rem;
      box-shadow: inset 0 0 50px #707070;
      font-size: 2rem;

      h1 {
        cursor: pointer;
        font-family: "Lobster Two", cursive;
        color: #094236;
        color: #0d4051;
        text-align: center;
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h3 {
        font-family: "Lobster Two", cursive;
        color: #094236;
        color: #0d4051;
        letter-spacing: 2px;
      }

      p {
        width: 70%;
        font-size: 1.2rem;
        line-height: 1.9;
        letter-spacing: 2px;
        font-family: "Lobster Two";
      }

      .btn-start-quiz {
        margin: 1.5rem 0;
        background: radial-gradient(
          ellipse at center,
          #b3cbdb 0%,
          #809eb2 40%,
          #0d4051 100%
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


    @media (max-width: 920px) {
      .categories {
          grid-template-columns: 1fr 1fr !important;
        
        }
    }



    @media (max-width: 600px) {
      .quiz-container {
        width: 90%;
      }
      .score {
        min-height: 10rem;
      }

      h1 {
        margin-top: 5%;
        font-size: 1.9rem;
      }

      .welcome-level {
        img {
          width: 4rem;
        }

        p {
          width: 90% !important;
          font-size: 1rem !important;
        }

        h3 {
          font-size: 1.2rem;
        }

        .categories {
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          width: 90%;
          margin: auto;
        }
        .btn-bubble {
          padding: 1rem 0.8rem !important;
        }

        .btn-start-quiz {
          margin-top: 0;
          font-size: 1.2rem;
          height: 110px;
          width: 110px;
        }
      }
    }

   
  }
`;
