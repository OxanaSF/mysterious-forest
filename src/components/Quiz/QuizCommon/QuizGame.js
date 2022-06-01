import { useState } from "react";
import styled from "styled-components";
import QuizResDisplay from "./QuizResDisplay";
import Stats from "./Stats";
import QuizAnswer from "./QuizAnswer";
import FadeTransition from "./FadeTransition";


const getPoints = () => {
  return 2;
};

const QuizGame = (props) => {
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;

  const questionNumber = triviaIndex + 1;
  const numQuestions = props.data.length;

  const restartGame = (props) => {
    setGameState({
      score: 0,
      triviaIndex: 0,
      isGameOver: false,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= props.data.length - 1) {
      setGameState({ ...gameState, isGameOver: true });
      if (score >= 6) {
        props.setTotalResult(props.trophiesDisplay);
        props.setPrizeBtn(props.currentPrize)
      }
    } else {
      setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect) => {
    const pointValue = getPoints();

    if (wasPlayerCorrect) {
      setGameState({
        ...gameState,
        score: score + pointValue,
        
      });
    }
  };

  let pageContent;
  let pageKey;
  if (isGameOver) {
    pageKey = "QuizResDisplay";
    pageContent = (
      <QuizResDisplay
        score={score}

        totalResult={props.totalResult}
        setTotalResult={props.setTotalResult}

        prizeBtn={props.prizeBtn}
        scoreIcon={props.scoreIcon}
        trophiesDisplay={props.trophiesDisplay}
        reload={props.reload}

        linkToPage={props.linkToPage}
        setLinkToPage={props.setLinkToPage}

        textDisplay={props.textDisplay}
        setTextDisplay={props.setTextDisplay}
      />
    );
  } else {
    pageKey = triviaIndex;
    const triviaQuestion = props.data[triviaIndex];
    const { correct_answer, incorrect_answers, question } = triviaQuestion;
    pageContent = (
      <QuizAnswer
        key={triviaIndex}
        question={question}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
        restartGame={restartGame}
        classStyle={props.classStyle}
      />
    );
  }

  return (
    <QuizDisplayStyled>
      <Stats
        score={score}
        questionNumber={questionNumber}
        totalQuestions={numQuestions}
      />

      <FadeTransition key={pageKey}>{pageContent}</FadeTransition>
    </QuizDisplayStyled>
  );
};

const QuizDisplayStyled = styled.div`
  margin-top: 3rem;
`;

export default QuizGame;
