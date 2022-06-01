import styled from "styled-components";
import babaYagaImg from "../../../assets/images/baba_iagaa.jpeg";
import fogOne from "../../../assets/images/fog-1.png";
import fogTwo from "../../../assets/images/fog-2.png";

export const QuizEasyStyled = styled.section`
 .canvas {
    min-height: 100vh;
    background-image: url(${babaYagaImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    z-index: 0;

    .fog-anime {
      position: absolute;
      height: 100%;
      overflow: hidden;
      position: relative;
      padding-bottom: 15rem;
    }

    .fog-img {
      position: absolute;
      height: 100%;
      width: 300vw;
      margin-bottom: 5rem;
      z-index: -1;
    }

    .fog-img-first {
      background: url(${fogOne});
      background-repeat: repeat-x;
      background-size: contain;
      background-position: center;
      animation: marquee 60s linear infinite;
    }

    .fog-img-second {
      background: url(${fogTwo});
      background-repeat: repeat-x;
      background-size: contain;
      background-position: center;
      animation: marquee 30s linear infinite;
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
      background: radial-gradient(
        ellipse at center,
        #b8c6c6 0%,
        #708a8c 46%,
        #324d4e 100%
      );
      padding: 0.4rem 3.5rem;
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
      margin-top: 5%;
      display: flex;
      gap: 3rem;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .quiz-container {
      width: 70%;
      height: 90%;
      min-height: 70vh;
      margin: auto;
      background-color: rgba(259, 259, 259, 0.5);
      border-radius: 3rem;
      box-shadow: inset 0 0 50px #707070;
      font-size: 2rem;

      h1 {
        cursor: pointer;
        font-family: "Lobster Two", cursive;
        color: #344a48;
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
          #708a8c 46%,
          #324d4e 100%
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
  }




  @media (max-width: 600px) {

    .canvas {
      min-height: 80vh !important;

    .fog-anime {
      height: 0%;
      padding-bottom: 5rem;
    }

    .fog-img {
      height: 0%;
    }

    .fog-img-first {
      height: 0%;
      animation: none;
    }

    .fog-img-second {
      height: 0%;
      animation: none;
    }

    }


  .quiz-container {
    width: 90% !important;

  }

    .score {
      min-height: 10rem;
      font-size: 1.4rem !important;
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
        grid-template-columns: 1fr 1fr !important;
        gap: 0.5rem !important;
        width: 90% !important;
      }
      .btn-bubble {
        padding: 1rem 0.8rem !important;
      }

      .btn-start-quiz {
        margin-top: 0 !important;
        font-size: 1.2rem !important;
        height: 110px !important;
        width: 110px !important;
      }
    }
  }

`