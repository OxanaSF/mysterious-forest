import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GuessNumGameStyled, FailedScreenStyled } from "./GuessNumGameStyled";
import { motion } from "framer-motion";

import useSound from "use-sound";
import correctSound from "../sounds/correct.wav";
import incorrectSound from "../sounds/wrong.wav";
import wonSound from "../sounds/won.wav";
import openLockSound from "../sounds/open_lock.wav";

let random = Math.floor(Math.random() * 100) + 1;

const GuessNumGame = (props) => {
  const [playCorrect] = useSound(correctSound, { volume: 0.5 });
  const [playIncorrect] = useSound(incorrectSound, { volume: 0.5 });
  const [playWon] = useSound(wonSound, { volume: 0.5 });
  const [playOpenLock] = useSound(openLockSound, { volume: 0.5 });

  const [guess, setGuess] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [count, setCount] = useState(8);
  console.log("Random: ", random);
  const [msg, setMsg] = useState("");

  const [disabled, setDisabled] = useState(true);
  const [disabledInput, setDisabledInput] = useState(false);

  const [openQuizHardModal, setOpenQuizHardModal] = useState(false);

  useEffect(() => {
    if (random === guess) {
      setTimeout(() => {}, 4000);
    }
  });

  useEffect(() => {
    if (random === guess) {
      setTimeout(() => {
        props.setTest(true);
        playWon();
      }, 7000);
    }
  });

  useEffect(() => {
    if (random === guess) {
      setTimeout(() => {
        playOpenLock();
      }, 20000);
    }
  });

  const valueChangeHandler = (e) => {
    setGuess(Number(e.target.value));
    setDisabled(false);
  };

  const submitHandler = () => {
    setGuess("");
    setDisabled(true);
    if (random === guess) {
      playCorrect();
      props.setPrizeBtn(props.currentPrize);
      setMsg("It is Correct!!!");
      props.setTotalResult(props.trophiesDisplay);
      setAllGuesses([]);
    } else {
      setCount(count - 1);
      playIncorrect();
      setMsg("Wrong!");
      if (random < guess) {
        setMsg("Your guess is High");
      } else {
        setMsg("Your guess is Low");
      }
    }

    setAllGuesses([...allGuesses, guess]);

    
    if (count === 0) {
      setDisabled(true);
      setDisabledInput(true);
      setMsg("Game Over!");
    }
  };

  return (
    <>
      {count === 0 && random !== guess ? (
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
      ) : (
        !openQuizHardModal && (
          <GuessNumGameStyled>
            <motion.div className="guess-num-wrapper">
              <h2>{count} attempts left.</h2>

              <h3 className="message">{msg}</h3>
              <p className="type-here">Type your guess inside the ball:</p>
              <input
                disabled={disabledInput}
                value={guess}
                type="text"
                onChange={valueChangeHandler}
              />
              <button disabled={disabled} onClick={submitHandler}>
                Submit
              </button>

              <div>
                <div className="guesses">
                  <div className="your-guesses">Yor guesses are: </div>
                  <div className="guess">
                    {allGuesses.map((number, index) => {
                      return <span key={index}> {number} </span>;
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </GuessNumGameStyled>
        )
      )}

      {}
    </>
  );
};

export default GuessNumGame;
