import React, { useState } from "react";
import { motion } from "framer-motion";

import { GuessNumberStyled } from "./GuessNumberStyled";

import Navbar from "../../Navbar";
import Score from "../QuizCommon/Score";
import Footer from "../../Footer";

import GuessNumGame from "./GuessNumGame";
import FinalPage from "../../FinalPage/FinalPage";

import { totalResultHard } from "../../utils/totalRewardDisplay";
import AcornGold from "../../../assets/images/acorn.png";

const GuessNumber = (props) => {
  const [openQuizEasyModal, setOpenQuizEasyModal] = useState(false);

  const [test, setTest] = useState(false)


  const trophiesDisplay = totalResultHard;
  const currentPrize = AcornGold;

  let contents = (
    <GuessNumGame
      setTotalResult={props.setTotalResult}
      prizeBtn={props.prizeBtn}
      setPrizeBtn={props.setPrizeBtn}
      trophiesDisplay={trophiesDisplay}
      currentPrize={currentPrize}

      test={test}
      setTest={setTest}
    />
  );

  return (
    <>

    {test &&  <FinalPage />}

    {!test &&
    <GuessNumberStyled>
      <div className="canvas">
        <div className="fog-anime">
          <Navbar className="nav" reload={props.reload} />

          <div className="quiz-container">
            <div className="content">
              <Score className="score" totalResult={props.totalResult} />

              {openQuizEasyModal && contents}

              {!openQuizEasyModal && (
                <motion.div
                  className="welcome-level"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    type: "tween",
                  }}
                >
                  <h1>Welcome to the Round 3</h1>

                  <p>
                  You're almost got to the end and met an 
                  ancient druid. He will give you the key to escape the Forest
                  if you guess the hidden number between 
                  1 and 100 in 8 attempts. When you're ready, press Go:
                  </p>

                  <button
                    className="btn-start-quiz"
                    onClick={() => {
                      setOpenQuizEasyModal(true);
                    }}
                  >
                    {" "}
                    Go{" "}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </GuessNumberStyled>
}
    </>
  );
};

export default GuessNumber;



