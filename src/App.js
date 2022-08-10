import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import Home from './components/Home/Home';
import QuizEasy from './components/Quiz/QuizEasy/QuizEasy';
import QuizMedium from './components/Quiz/QuizMedium/QuizMedium';
import GuessNumber from './components/Quiz/GuessNumber/GuessNumber';
import FinalPage from './components/FinalPage/FinalPage';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import PineCone from './assets/images/pine-cone-blue.png';
import PineConeGold from './assets/images/pine-cone-gold.png';

import { totalResultInit } from './components/utils/totalRewardDisplay';
import { easyLevelText } from './components/utils/textDisplay';

function App() {
  const [totalResult, setTotalResult] = useState(totalResultInit);
  const [textDisplay, setTextDisplay] = useState(easyLevelText);
  const [scoreIcon, setScoreIcon] = useState(PineCone);
  const [prizeBtn, setPrizeBtn] = useState(PineConeGold);
  const [linkToPage, setLinkToPage] = useState('');
  const [quizEasyStyle, setQuizEasyStyle] = useState('trivia-item__button');

  const goldPrizeStyle = '';

  const reload = () => {
    setTotalResult(totalResultInit);
    setScoreIcon(PineCone);
    setPrizeBtn(PineConeGold);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />

      <Router>
        <AppWrapperStyled className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="quizeasy"
              element={
                <QuizEasy
                  totalResult={totalResult}
                  setTotalResult={setTotalResult}
                  scoreIcon={scoreIcon}
                  setScoreIcon={setScoreIcon}
                  prizeBtn={prizeBtn}
                  setPrizeBtn={setPrizeBtn}
                  reload={reload}
                  goldPrizeStyle={goldPrizeStyle}
                  linkToPage={linkToPage}
                  setLinkToPage={setLinkToPage}
                  textDisplay={textDisplay}
                  quizEasyStyle={quizEasyStyle}
                />
              }
            />
            <Route
              path="quizmedium"
              element={
                <QuizMedium
                  totalResult={totalResult}
                  setTotalResult={setTotalResult}
                  scoreIcon={scoreIcon}
                  setScoreIcon={setScoreIcon}
                  prizeBtn={prizeBtn}
                  setPrizeBtn={setPrizeBtn}
                  reload={reload}
                  goldPrizeStyle={goldPrizeStyle}
                  linkToPage={linkToPage}
                  setLinkToPage={setLinkToPage}
                  textDisplay={textDisplay}
                  setTextDisplay={setTextDisplay}
                  quizEasyStyle={quizEasyStyle}
                  setQuizEasyStyle={setQuizEasyStyle}
                />
              }
            />
            <Route
              path="guessnumber"
              element={
                <GuessNumber
                  totalResult={totalResult}
                  setTotalResult={setTotalResult}
                  prizeBtn={prizeBtn}
                  setPrizeBtn={setPrizeBtn}
                  reload={reload}
                  goldPrizeStyle={goldPrizeStyle}
                  linkToPage={linkToPage}
                  setLinkToPage={setLinkToPage}
                />
              }
            />
            <Route path="finalpage" element={<FinalPage />} />
          </Routes>
        </AppWrapperStyled>
      </Router>

   
    </DndProvider>
  );
}

const AppWrapperStyled = styled.div`
  height: 98.5vh;
  margin: 0;
  padding: 0;
`;

export default App;
