import styled from 'styled-components';
import forestImg from '../../assets/images/forest.jpg';

export const HomeStyled = styled.section`
    

.canvas {
    height: 150vh;
}

  .container {
    width: 800px;
    height: 800px;
    margin: auto;
    background-color: rgba(259, 259, 259, 0.5);
    border-radius: 50%;
    box-shadow: inset 0 0 100px #707070;

    display: flex;
    flex-direction: column;
    padding-top: 10%;
    align-items: center;
    font-size: 5rem;
    /* font-size: 3rem; */
    text-align: center;
 
 
   


    h1 {
      cursor: pointer;
      font-family: 'Lobster Two', cursive;
      color: #344a48;
    }

    p {
      width: 60%;
      font-size: 1.2rem;
      /* font-size: 1rem; */
      line-height: 1.9;
      letter-spacing: 2px;
      font-family: 'Lobster Two', cursive;
    }



    button {
      margin-top: 1rem;
      background: radial-gradient(
        ellipse at center,
        #b8c6c6 0%,
        #708a8c 46%,
        #324d4e 100%
      );
      height: 130px;
      /* height: 100px; */
      width: 130px;
      /* width: 100px; */
      padding: 1.5rem;
      color: white;
      font-size: 1.7rem;
      /* font-size: 1.2rem; */
      letter-spacing: 2px;
      border: none;
      cursor: pointer;
      border-radius: 50%;
    }
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 880px) {
    .canvas {
      height: 896px;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-top: 20%;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      font-size: 3rem;

      p {
        margin: 2.5rem;
        font-size: 1.2rem;
      }

      button {
        margin-top: 1.5rem;
        height: 100px;
        width: 100px;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 430px) {
    .container {
      font-size: 0.9rem;
      width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      padding: 3rem 0;

      h1 {
        font-size: 3rem;
      }

      p {
        margin-top: 1.8rem;
        font-size: 0.7rem;
        margin: 0;
      }

      .btn-begin {
        margin-bottom: 3rem;
        margin-top: 1.5rem;
        height: 100px;
        width: 100px;
        font-size: 1.1rem;
        background: radial-gradient(
          ellipse at center,
          #566a6b 0%,
          #4b6263 46%,
          #324d4e 100%
        );
      }
    }

    .canvas {
      min-height: 100vh;
      background-image: url(${forestImg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0.9;
      padding-top: 6rem;
      position: relative;
      overflow: hidden;
    }
  }

  .canvas {
    height: 100vh;
    background-image: url(${forestImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    padding-top: 6rem;
    position: relative;
    overflow: hidden;
  }
  .bubble {
    display: block;
    border-radius: 100%;
    opacity: 0.8;
    position: absolute;
  }
  .bubble:nth-child(1) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 51px;
    height: 51px;
    left: 23vw;
    bottom: 61vh;
    -webkit-animation: move1 infinite 10s;
    animation: move1 infinite 10s;
  }
  @-webkit-keyframes move1 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 8vh;
      transform: translate(117px, 0);
      opacity: 0;
    }
  }
  @keyframes move1 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 8vh;
      transform: translate(117px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(2) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 21px;
    height: 21px;
    left: 83vw;
    bottom: 28vh;
    -webkit-animation: move2 infinite 3s;
    animation: move2 infinite 3s;
  }
  @-webkit-keyframes move2 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(78px, 0);
      opacity: 0;
    }
  }
  @keyframes move2 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(78px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(3) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 53px;
    height: 53px;
    left: 47vw;
    bottom: 21vh;
    -webkit-animation: move3 infinite 12s;
    animation: move3 infinite 12s;
  }
  @-webkit-keyframes move3 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 71vh;
      transform: translate(151px, 0);
      opacity: 0;
    }
  }
  @keyframes move3 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 71vh;
      transform: translate(151px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(4) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 10px;
    height: 10px;
    left: 45vw;
    bottom: 31vh;
    -webkit-animation: move4 infinite 8s;
    animation: move4 infinite 8s;
  }
  @-webkit-keyframes move4 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 27vh;
      transform: translate(100px, 0);
      opacity: 0;
    }
  }
  @keyframes move4 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 27vh;
      transform: translate(100px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(5) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 6px;
    height: 6px;
    left: 4vw;
    bottom: 9vh;
    -webkit-animation: move5 infinite 5s;
    animation: move5 infinite 5s;
  }
  @-webkit-keyframes move5 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 9vh;
      transform: translate(-56px, 0);
      opacity: 0;
    }
  }
  @keyframes move5 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 9vh;
      transform: translate(-56px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(6) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 46px;
    height: 46px;
    left: 56vw;
    bottom: 50vh;
    -webkit-animation: move6 infinite 9s;
    animation: move6 infinite 9s;
  }
  @-webkit-keyframes move6 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(-44px, 0);
      opacity: 0;
    }
  }
  @keyframes move6 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(-44px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(7) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 96px;
    height: 96px;
    left: 97vw;
    bottom: 85vh;
    -webkit-animation: move7 infinite 5s;
    animation: move7 infinite 5s;
  }
  @-webkit-keyframes move7 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 11vh;
      transform: translate(122px, 0);
      opacity: 0;
    }
  }
  @keyframes move7 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 11vh;
      transform: translate(122px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(8) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 71px;
    height: 71px;
    left: 63vw;
    bottom: 52vh;
    -webkit-animation: move8 infinite 15s;
    animation: move8 infinite 15s;
  }
  @-webkit-keyframes move8 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 77vh;
      transform: translate(73px, 0);
      opacity: 0;
    }
  }
  @keyframes move8 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 77vh;
      transform: translate(73px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(9) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 63px;
    height: 63px;
    left: 16vw;
    bottom: 47vh;
    -webkit-animation: move9 infinite 14s;
    animation: move9 infinite 14s;
  }
  @-webkit-keyframes move9 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 31vh;
      transform: translate(65px, 0);
      opacity: 0;
    }
  }
  @keyframes move9 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 31vh;
      transform: translate(65px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(10) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 8px;
    height: 8px;
    left: 58vw;
    bottom: 50vh;
    -webkit-animation: move10 infinite 12s;
    animation: move10 infinite 12s;
  }
  @-webkit-keyframes move10 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 0vh;
      transform: translate(149px, 0);
      opacity: 0;
    }
  }
  @keyframes move10 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 0vh;
      transform: translate(149px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(11) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 23px;
    height: 23px;
    left: 48vw;
    bottom: 67vh;
    -webkit-animation: move11 infinite 6s;
    animation: move11 infinite 6s;
  }
  @-webkit-keyframes move11 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(-19px, 0);
      opacity: 0;
    }
  }
  @keyframes move11 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(-19px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(12) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 16px;
    height: 16px;
    left: 7vw;
    bottom: 3vh;
    -webkit-animation: move12 infinite 3s;
    animation: move12 infinite 3s;
  }
  @-webkit-keyframes move12 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(-28px, 0);
      opacity: 0;
    }
  }
  @keyframes move12 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(-28px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(13) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 7px;
    height: 7px;
    left: 9vw;
    bottom: 84vh;
    -webkit-animation: move13 infinite 12s;
    animation: move13 infinite 12s;
  }
  @-webkit-keyframes move13 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(48px, 0);
      opacity: 0;
    }
  }
  @keyframes move13 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(48px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(14) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 69px;
    height: 69px;
    left: 83vw;
    bottom: 56vh;
    -webkit-animation: move14 infinite 10s;
    animation: move14 infinite 10s;
  }
  @-webkit-keyframes move14 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 83vh;
      transform: translate(16px, 0);
      opacity: 0;
    }
  }
  @keyframes move14 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 83vh;
      transform: translate(16px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(15) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 30px;
    height: 30px;
    left: 48vw;
    bottom: 67vh;
    -webkit-animation: move15 infinite 15s;
    animation: move15 infinite 15s;
  }
  @-webkit-keyframes move15 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(119px, 0);
      opacity: 0;
    }
  }
  @keyframes move15 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(119px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(16) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 92px;
    height: 92px;
    left: 90vw;
    bottom: 26vh;
    -webkit-animation: move16 infinite 13s;
    animation: move16 infinite 13s;
  }
  @-webkit-keyframes move16 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(111px, 0);
      opacity: 0;
    }
  }
  @keyframes move16 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(111px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(17) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 14px;
    height: 14px;
    left: 83vw;
    bottom: 80vh;
    -webkit-animation: move17 infinite 15s;
    animation: move17 infinite 15s;
  }
  @-webkit-keyframes move17 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 47vh;
      transform: translate(-71px, 0);
      opacity: 0;
    }
  }
  @keyframes move17 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 47vh;
      transform: translate(-71px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(18) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 32px;
    height: 32px;
    left: 43vw;
    bottom: 72vh;
    -webkit-animation: move18 infinite 9s;
    animation: move18 infinite 9s;
  }
  @-webkit-keyframes move18 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 65vh;
      transform: translate(90px, 0);
      opacity: 0;
    }
  }
  @keyframes move18 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 65vh;
      transform: translate(90px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(19) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 12px;
    height: 12px;
    left: 8vw;
    bottom: 33vh;
    -webkit-animation: move19 infinite 14s;
    animation: move19 infinite 14s;
  }
  @-webkit-keyframes move19 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(-87px, 0);
      opacity: 0;
    }
  }
  @keyframes move19 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 1vh;
      transform: translate(-87px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(20) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 31px;
    height: 31px;
    left: 92vw;
    bottom: 78vh;
    -webkit-animation: move20 infinite 5s;
    animation: move20 infinite 5s;
  }
  @-webkit-keyframes move20 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 60vh;
      transform: translate(192px, 0);
      opacity: 0;
    }
  }
  @keyframes move20 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 60vh;
      transform: translate(192px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(21) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 74px;
    height: 74px;
    left: 69vw;
    bottom: 72vh;
    -webkit-animation: move21 infinite 13s;
    animation: move21 infinite 13s;
  }
  @-webkit-keyframes move21 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 16vh;
      transform: translate(86px, 0);
      opacity: 0;
    }
  }
  @keyframes move21 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 16vh;
      transform: translate(86px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(22) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 5px;
    height: 5px;
    left: 58vw;
    bottom: 82vh;
    -webkit-animation: move22 infinite 8s;
    animation: move22 infinite 8s;
  }
  @-webkit-keyframes move22 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 67vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  @keyframes move22 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 67vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(23) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 10px;
    height: 10px;
    left: 40vw;
    bottom: 8vh;
    -webkit-animation: move23 infinite 13s;
    animation: move23 infinite 13s;
  }
  @-webkit-keyframes move23 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(-35px, 0);
      opacity: 0;
    }
  }
  @keyframes move23 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(-35px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(24) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 56px;
    height: 56px;
    left: 74vw;
    bottom: 22vh;
    -webkit-animation: move24 infinite 6s;
    animation: move24 infinite 6s;
  }
  @-webkit-keyframes move24 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 98vh;
      transform: translate(61px, 0);
      opacity: 0;
    }
  }
  @keyframes move24 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 98vh;
      transform: translate(61px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(25) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 94px;
    height: 94px;
    left: 6vw;
    bottom: 65vh;
    -webkit-animation: move25 infinite 11s;
    animation: move25 infinite 11s;
  }
  @-webkit-keyframes move25 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 70vh;
      transform: translate(-100px, 0);
      opacity: 0;
    }
  }
  @keyframes move25 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 70vh;
      transform: translate(-100px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(26) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 44px;
    height: 44px;
    left: 94vw;
    bottom: 4vh;
    -webkit-animation: move26 infinite 7s;
    animation: move26 infinite 7s;
  }
  @-webkit-keyframes move26 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 69vh;
      transform: translate(149px, 0);
      opacity: 0;
    }
  }
  @keyframes move26 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 69vh;
      transform: translate(149px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(27) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 5px;
    height: 5px;
    left: 86vw;
    bottom: 55vh;
    -webkit-animation: move27 infinite 15s;
    animation: move27 infinite 15s;
  }
  @-webkit-keyframes move27 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(-63px, 0);
      opacity: 0;
    }
  }
  @keyframes move27 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 82vh;
      transform: translate(-63px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(28) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 43px;
    height: 43px;
    left: 14vw;
    bottom: 8vh;
    -webkit-animation: move28 infinite 11s;
    animation: move28 infinite 11s;
  }
  @-webkit-keyframes move28 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 86vh;
      transform: translate(-25px, 0);
      opacity: 0;
    }
  }
  @keyframes move28 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 86vh;
      transform: translate(-25px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(29) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 87px;
    height: 87px;
    left: 20vw;
    bottom: 23vh;
    -webkit-animation: move29 infinite 8s;
    animation: move29 infinite 8s;
  }
  @-webkit-keyframes move29 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(116px, 0);
      opacity: 0;
    }
  }
  @keyframes move29 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 68vh;
      transform: translate(116px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(30) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 7px;
    height: 7px;
    left: 47vw;
    bottom: 30vh;
    -webkit-animation: move30 infinite 15s;
    animation: move30 infinite 15s;
  }
  @-webkit-keyframes move30 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(174px, 0);
      opacity: 0;
    }
  }
  @keyframes move30 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(174px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(31) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 24px;
    height: 24px;
    left: 93vw;
    bottom: 42vh;
    -webkit-animation: move31 infinite 9s;
    animation: move31 infinite 9s;
  }
  @-webkit-keyframes move31 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 72vh;
      transform: translate(19px, 0);
      opacity: 0;
    }
  }
  @keyframes move31 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 72vh;
      transform: translate(19px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(32) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 65px;
    height: 65px;
    left: 37vw;
    bottom: 8vh;
    -webkit-animation: move32 infinite 12s;
    animation: move32 infinite 12s;
  }
  @-webkit-keyframes move32 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 99vh;
      transform: translate(55px, 0);
      opacity: 0;
    }
  }
  @keyframes move32 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 99vh;
      transform: translate(55px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(33) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 76px;
    height: 76px;
    left: 37vw;
    bottom: 65vh;
    -webkit-animation: move33 infinite 5s;
    animation: move33 infinite 5s;
  }
  @-webkit-keyframes move33 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 52vh;
      transform: translate(-46px, 0);
      opacity: 0;
    }
  }
  @keyframes move33 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 52vh;
      transform: translate(-46px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(34) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 95px;
    height: 95px;
    left: 17vw;
    bottom: 4vh;
    -webkit-animation: move34 infinite 12s;
    animation: move34 infinite 12s;
  }
  @-webkit-keyframes move34 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 20vh;
      transform: translate(-37px, 0);
      opacity: 0;
    }
  }
  @keyframes move34 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 20vh;
      transform: translate(-37px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(35) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 82px;
    height: 82px;
    left: 61vw;
    bottom: 56vh;
    -webkit-animation: move35 infinite 13s;
    animation: move35 infinite 13s;
  }
  @-webkit-keyframes move35 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(154px, 0);
      opacity: 0;
    }
  }
  @keyframes move35 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(154px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(36) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 56px;
    height: 56px;
    left: 56vw;
    bottom: 73vh;
    -webkit-animation: move36 infinite 14s;
    animation: move36 infinite 14s;
  }
  @-webkit-keyframes move36 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 63vh;
      transform: translate(132px, 0);
      opacity: 0;
    }
  }
  @keyframes move36 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 63vh;
      transform: translate(132px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(37) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 17px;
    height: 17px;
    left: 17vw;
    bottom: 45vh;
    -webkit-animation: move37 infinite 14s;
    animation: move37 infinite 14s;
  }
  @-webkit-keyframes move37 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(153px, 0);
      opacity: 0;
    }
  }
  @keyframes move37 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 74vh;
      transform: translate(153px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(38) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 61px;
    height: 61px;
    left: 6vw;
    bottom: 3vh;
    -webkit-animation: move38 infinite 3s;
    animation: move38 infinite 3s;
  }
  @-webkit-keyframes move38 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 14vh;
      transform: translate(145px, 0);
      opacity: 0;
    }
  }
  @keyframes move38 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 14vh;
      transform: translate(145px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(39) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 56px;
    height: 56px;
    left: 95vw;
    bottom: 100vh;
    -webkit-animation: move39 infinite 11s;
    animation: move39 infinite 11s;
  }
  @-webkit-keyframes move39 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 81vh;
      transform: translate(96px, 0);
      opacity: 0;
    }
  }
  @keyframes move39 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 81vh;
      transform: translate(96px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(40) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 20px;
    height: 20px;
    left: 54vw;
    bottom: 91vh;
    -webkit-animation: move40 infinite 9s;
    animation: move40 infinite 9s;
  }
  @-webkit-keyframes move40 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(-79px, 0);
      opacity: 0;
    }
  }
  @keyframes move40 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 13vh;
      transform: translate(-79px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(41) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 36px;
    height: 36px;
    left: 4vw;
    bottom: 20vh;
    -webkit-animation: move41 infinite 10s;
    animation: move41 infinite 10s;
  }
  @-webkit-keyframes move41 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 51vh;
      transform: translate(99px, 0);
      opacity: 0;
    }
  }
  @keyframes move41 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 51vh;
      transform: translate(99px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(42) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 69px;
    height: 69px;
    left: 76vw;
    bottom: 61vh;
    -webkit-animation: move42 infinite 14s;
    animation: move42 infinite 14s;
  }
  @-webkit-keyframes move42 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 20vh;
      transform: translate(-66px, 0);
      opacity: 0;
    }
  }
  @keyframes move42 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 20vh;
      transform: translate(-66px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(43) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 25px;
    height: 25px;
    left: 57vw;
    bottom: 27vh;
    -webkit-animation: move43 infinite 9s;
    animation: move43 infinite 9s;
  }
  @-webkit-keyframes move43 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 45vh;
      transform: translate(150px, 0);
      opacity: 0;
    }
  }
  @keyframes move43 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 45vh;
      transform: translate(150px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(44) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 67px;
    height: 67px;
    left: 64vw;
    bottom: 30vh;
    -webkit-animation: move44 infinite 11s;
    animation: move44 infinite 11s;
  }
  @-webkit-keyframes move44 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 38vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  @keyframes move44 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 38vh;
      transform: translate(136px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(45) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 9px;
    height: 9px;
    left: 89vw;
    bottom: 75vh;
    -webkit-animation: move45 infinite 5s;
    animation: move45 infinite 5s;
  }
  @-webkit-keyframes move45 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 62vh;
      transform: translate(-23px, 0);
      opacity: 0;
    }
  }
  @keyframes move45 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 62vh;
      transform: translate(-23px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(46) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 47px;
    height: 47px;
    left: 38vw;
    bottom: 16vh;
    -webkit-animation: move46 infinite 14s;
    animation: move46 infinite 14s;
  }
  @-webkit-keyframes move46 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 90vh;
      transform: translate(161px, 0);
      opacity: 0;
    }
  }
  @keyframes move46 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 90vh;
      transform: translate(161px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(47) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 97px;
    height: 97px;
    left: 33vw;
    bottom: 49vh;
    -webkit-animation: move47 infinite 12s;
    animation: move47 infinite 12s;
  }
  @-webkit-keyframes move47 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 99vh;
      transform: translate(145px, 0);
      opacity: 0;
    }
  }
  @keyframes move47 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 99vh;
      transform: translate(145px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(48) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 43px;
    height: 43px;
    left: 30vw;
    bottom: 4vh;
    -webkit-animation: move48 infinite 9s;
    animation: move48 infinite 9s;
  }
  @-webkit-keyframes move48 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 44vh;
      transform: translate(91px, 0);
      opacity: 0;
    }
  }
  @keyframes move48 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 44vh;
      transform: translate(91px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(49) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 100px;
    height: 100px;
    left: 11vw;
    bottom: 36vh;
    -webkit-animation: move49 infinite 9s;
    animation: move49 infinite 9s;
  }
  @-webkit-keyframes move49 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 88vh;
      transform: translate(-68px, 0);
      opacity: 0;
    }
  }
  @keyframes move49 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 88vh;
      transform: translate(-68px, 0);
      opacity: 0;
    }
  }
  .bubble:nth-child(50) {
    background: radial-gradient(
      ellipse at center,
      #b8c6c6 0%,
      #708a8c 46%,
      #324d4e 100%
    );
    width: 60px;
    height: 60px;
    left: 38vw;
    bottom: 76vh;
    -webkit-animation: move50 infinite 6s;
    animation: move50 infinite 6s;
  }
  @-webkit-keyframes move50 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 50vh;
      transform: translate(-94px, 0);
      opacity: 0;
    }
  }
  @keyframes move50 {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 50vh;
      transform: translate(-94px, 0);
      opacity: 0;
    }
  }
`;
