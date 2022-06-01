import styled from "styled-components";


import forestImg from "../../assets/images/druid.jpg";

export const FinalPageStyled = styled.section`

  height: 100vh;

background-image: url(${forestImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;



display: flex;
align-items: center;
justify-content: center;




.key {
  width: 15rem;
  height: 15rem;
  border: 0px solid #9ecaed;
  padding: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 40px #9ecaed;
  cursor: pointer;

  animation-duration: 12s;
  animation-fill-mode: forwards;

  position: absolute;
  transform: translateX(-200vw);
  transform: translateY(-200vw);
  animation-delay: 2s;
}

.gold-pine {
  animation-name: slide-in-pine-cone;
}

.gold-lotus {
  animation-name: slide-in-lotus;
}

.gold-acorn {
  animation-name: slide-in-acorn;
}

.text {
  font-family: "Lobster Two", cursive;
  letter-spacing: 4px;
  width: 90%;
  border: none;
  padding: 0;
  box-shadow: none;
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 50rem;
  color: #c1f4f4;

  text-shadow: -1px 1px 0 #4d3d22, 1px 1px 0 #4d3d22, 1px -1px 0 #4d3d22,
    -1px -1px 0 #4d3d22;

  animation-name: slide-in-text;
  animation-delay: 10s;
}

.nav {
  align-self: self-start;
}





@keyframes slide-in-pine-cone {
  0% {
    transform: translateX(-200vw);
    opacity: 0;
  }
  5%,
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20%,
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}

@keyframes slide-in-lotus {
  0%,
  20% {
    transform: translateY(-100vw);
    opacity: 0;
  }
  30%,
  40% {
    transform: translateY(0);
    opacity: 1;
  }
  50%,
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

@keyframes slide-in-acorn {
  0%,
  50% {
    transform: translateX(100vw);
    opacity: 0;
  }
  60%,
  70% {
    transform: translateX(0);
    opacity: 1;
  }
  80%,
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}

@keyframes slide-in-text {
  0%,
  80% {
    transform: translateY(-100vw);
    opacity: 0;
  }
  90%,
  95% {
    transform: translateY(0);
    opacity: 1;
  }
  100%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}



.central-key {
  display: flex;
  align-items: center;
  justify-content: center;
}

.key-exit {
  width: 25rem;
  height: 25rem;
  border: 0px solid #9ecaed;
  padding: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 50px #9ecaed;
  cursor: pointer;
  opacity: 1;
}







@media (max-width: 600px) {
  .key-exit {
    width: 12rem;
    height: 12rem;
  }

  .key {
    width: 7.5rem;
    height: 7.5rem;
  }

  .text {
    font-size: 2.3rem;
    width: 90%;
    margin-bottom: 20rem;
  }
}



`