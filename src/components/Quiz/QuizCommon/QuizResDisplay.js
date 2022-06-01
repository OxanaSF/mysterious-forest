import { motion } from "framer-motion";
import useSound from "use-sound";
import styled from "styled-components";
import { Link } from "react-router-dom";
import wonSound from "../sounds/won.wav";

const QuizResDisplay = (props) => {
  const answeredHalfQuestions = props.score > 5;

  const [playWon] = useSound(wonSound, { volume: 0.5 });

  return (
    <>
      {answeredHalfQuestions && (
        <EndScreenStyled>
          <h1>Complete!</h1>
          <div className="pine-cones">
            <div>
              {[...Array(props.score)].map((el, index) => (
                <motion.img
                  key={index}
                  src={props.scoreIcon}
                  alt="pine cone"
                  className="pine-cone"
                  initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
                  animate={{ rotate: 360 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                />
              ))}
            </div>
          </div>

          {props.textDisplay}
          
          <Link to={props.linkToPage}>
            <motion.img
              onClick={() => props.setPrizeBtn(props.trophiesDisplay)}
              className="gold-pine-cone"
              src={props.prizeBtn}
              alt="gold pine cone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, delay: 2 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgb(255, 255, 255)",
              }}
            />
          </Link>
        </EndScreenStyled>
      )}

      {answeredHalfQuestions && playWon()}

      {!answeredHalfQuestions && (
        <FailedScreenStyled>
          <div className="display-failed">
            <h1>Failed!</h1>

            <div className="display-failed-btns">
              <button onClick={() => window.location.reload(false)}>
                {" "}
                Retry
              </button>

              <Link to="/">
                <button onClick={() => props.reload}>Finish</button>
              </Link>
            </div>
          </div>
        </FailedScreenStyled>
      )}
    </>
  );
};

const EndScreenStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  h1 {
    letter-spacing: 2px;
  }

  .btn {
    cursor: pointer;
  }

  .pine-cone {
    width: 2rem;
    margin: 0.2rem;
  }

  .gold-pine-cone {
    width: 8rem;
    height: 8rem;
    margin: 0 0.3rem;
    border-radius: 50%;
    padding: 1rem 1.9rem;

    background: radial-gradient(
      ellipse at center,
      transparent 46%,
      #707d76 96%,
      #434a46 100%
    );
    animation-name: grow-shrink;
    opacity: 0.5;
    transition: opacity 0.9s ease-in-out;
  }



  .gold-pine-cone {
    width: 8rem;
    margin: 0 0.3rem;
    border-radius: 50%;
    padding: 1rem 1.9rem;

    background: radial-gradient(
      ellipse at center,
      transparent 46%,
      #707d76 96%,
      #434a46 100%
    );
    animation-name: grow-shrink;
    opacity: 0.5;
    transition: opacity 0.9s ease-in-out;
  }





  @keyframes grow-shrink {
    40% {
      transform: scale(1.5);
    }
    80% {
      transform: scale(1);
    }
  }

  .gold-pine-cone::hover {
    scale: 1.1;
    box-shadow: "0px 0px 25px rgb(255, 255, 255)";
  }

  .btn-end-screen {
    width: 25%;
    margin: auto;
  }
`;

const FailedScreenStyled = styled.div`
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

export default QuizResDisplay;
