import { useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from "../sounds/correct.wav";
import incorrectSound from "../sounds/wrong.wav";
import shuffle from "../../utils/shuffle";

const QuizAnswer = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;
  const [playCorrect] = useSound(correctSound, { volume: 0.5 });
  const [playIncorrect] = useSound(incorrectSound, { volume: 0.5 });

  const allAnswers = [props.correctAnswer, ...props.incorrectAnswers];
  const [shuffledAnswers] = useState(() => shuffle(allAnswers));

  let nextButtonClassName = "trivia-item__button trivia-item__next-button";
  if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

  const onAnswerClick = (event) => {
    const playerAnswer = event.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const playerCorrect = playerAnswer === props.correctAnswer;
    if (playerCorrect) playCorrect();
    else playIncorrect();
    props.onAnswerSelected(playerCorrect);
  };

  return (
    <QuestionsStyled>
      <div>
        <p className="trivia-item">{props.question}</p>
      </div>
      <ul className="answers">
        {shuffledAnswers.map((answer, i) => {
          let className = "trivia-item__button";
          if (hasPickedAnswer) {
            const pickedThisAnswer = answer === selectedAnswer;
            const isThisCorrect = answer === props.correctAnswer;
            if (pickedThisAnswer && isThisCorrect) {
              className += " trivia-item__button--correct";
            } else if (pickedThisAnswer && !isThisCorrect) {
              className += " trivia-item__button--incorrect";
            } else {
              className += " trivia-item__button--disabled";
            }
          }

          return (
            <li key={answer}>
              <button
                className={className}
                onClick={onAnswerClick}
                disabled={hasPickedAnswer}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className={nextButtonClassName}
        onClick={props.onNextClick}
        disabled={!hasPickedAnswer}
      >
        Next ➡
      </button>
    </QuestionsStyled>
  );
};

const QuestionsStyled = styled.div`
  display: grid;

  .trivia-item {
    /* width: 5%; */
    margin: auto;
    text-align: center;
    font-size: 1rem;
  }

  .trivia-item__button {
    margin-top: 3rem;
    background: radial-gradient(#b8c6c6 0%, #708a8c 46%, #324d4e 100%);
    height: 7.5rem;
    width: 20rem;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    border-radius: 2.1rem;
    transition: background 0.15s, transform 0.15s, border-color 0.15s;
    z-index: 1;
  }



  .trivia-item__button {
    margin-top: 3rem;
    background: radial-gradient(
        ellipse at center,
        #b3cbdb 0%,
        #809eb2 35%,
        #0d4051 100%
      );
    height: 7.5rem;
    width: 20rem;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    border-radius: 2.1rem;
    transition: background 0.15s, transform 0.15s, border-color 0.15s;
    z-index: 1;
  }


  .answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 0;
    margin-bottom: 2rem;
  }

  .trivia-item__next-button {
    margin: 1rem auto;
    width: 25%;
  }

  .trivia-item__button:hover {
    transform: scale(1.05);
  }

  .trivia-item__button:active {
    transform: rotate(2deg) scale(1.02);
  }

  .trivia-item__button:focus {
    border-color: black;
  }

  .trivia-item__button.trivia-item__button--disabled {
    background: #D0D0D0;
    text-shadow: -1px 1px 0 #324d4e, 0.5px 0.5px 0 #324d4e, 0.5px -0.5px 0 #324d4e,
    -0.5px -0.5px 0 #324d4e;
  }

  .trivia-item__button.trivia-item__button--correct {
    border: 5px solid #27bd26;
    animation: roll 1s;
  }

  .trivia-item__button.trivia-item__button--incorrect {
    border: 5px solid crimson;
  }

  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
     .trivia-item {
      width: 90% !important;
      font-size: 1rem !important;
    }


    .answers {
      grid-template-columns: 1fr;
      margin-bottom: 0 !important;
    }

    .trivia-item__button {
      margin-top: 1rem;
      font-size: 1rem;
      height: 4.5rem;
    width: 17rem;
      /* width: 80%; */
    }

    .trivia-item__next-button {
      margin: 1rem auto;
      /* width: 80%; */

    }
  }


`;

export default QuizAnswer;
