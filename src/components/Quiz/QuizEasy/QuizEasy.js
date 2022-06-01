import React, { useState } from "react";
import { motion } from "framer-motion";
import { QuizEasyStyled } from "./QuizEasyStyled";

import Navbar from "../../Navbar";
import Score from "../QuizCommon/Score";
import Footer from "../../Footer";

import ErrorMessage from "../QuizCommon/ErrorMessage";
import LoadingSpinner from "../QuizCommon/LoadingSpinner";
import QuizGame from "../QuizCommon/QuizGame";
import useFetchAPI from "../QuizCommon/useFetchAPI";

import { totalResultEasy } from "../../utils/totalRewardDisplay";
import PineConeGold from "../../../assets/images/pine-cone-gold.png";

const QuizEasy = (props) => {
  const [isLoading, errorMessage, data] = useFetchAPI(
    "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
  );
  const [openQuizEasyModal, setOpenQuizEasyModal] = useState(false);

  const trophiesDisplay = totalResultEasy;
  const currentPrize = PineConeGold;


  props.setLinkToPage("/quizmedium");

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else
    contents = (
      <QuizGame
        data={data}
        scoreIcon={props.scoreIcon}
        setScoreIcon={props.setScoreIcon}
        setTotalResult={props.setTotalResult}
        prizeBtn={props.prizeBtn}
        setPrizeBtn={props.setPrizeBtn}
        reload={props.reload}
        trophiesDisplay={trophiesDisplay}
        currentPrize={currentPrize}
        linkToPage={props.linkToPage}
        setLinkToPage={props.setLinkToPage}
        textDisplay={props.textDisplay}
        quizEasyStyle={props.quizEasyStyle}
      />
    );

  return (
    <QuizEasyStyled>
      <div className="canvas">
        <div className="fog-anime">
          <div class="fog-img fog-img-first"></div>
          <div class="fog-img fog-img-second"></div>

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
                  <h1>Welcome to the Round 1!</h1>

                  <p>
                    You wandered through the forest for a long time. It is
                    getting dark. Fortunately, you stumbled upon a house where
                    you can spend the night. <br></br>However, your joy wasn't
                    long, as Baba Yaga appeared and now you must answer to at
                    least three out of five easy questions correctly to earn the
                    necessary pine cones. Then Baba Yaga will give you a Golden
                    Pine that help you to find the right trail. Otherwise, she
                    will have you for dinner:
                  </p>

                  <button
                    className="btn-start-quiz"
                    onClick={() => {
                      setOpenQuizEasyModal(true);
                    }}
                  >
                    {" "}
                    Start Quiz{" "}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </QuizEasyStyled>
  );
};

export default QuizEasy;
