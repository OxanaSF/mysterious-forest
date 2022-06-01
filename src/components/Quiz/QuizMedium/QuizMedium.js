import React, { useState } from "react";

import { motion } from "framer-motion";

import mermaidImg from "../../../assets/images/mermaid1.png";
import LotusImg from "../../../assets/images/lotus.png";
import LotusGoldImg from "../../../assets/images/lotus-gold.png";

import Navbar from "../../Navbar";
import Score from "../QuizCommon/Score";
import Footer from "../../Footer";

import ErrorMessage from "../QuizCommon/ErrorMessage";
import LoadingSpinner from "../QuizCommon/LoadingSpinner";
import QuizGame from "../QuizCommon/QuizGame";
import { QuizMediumStyled } from "./QuizMediumStyled";
import useFetchAPI from "../QuizCommon/useFetchAPI";

import { urls, categories } from "../../utils/urls";
import { totalResultMedium } from "../../utils/totalRewardDisplay";
import { mediumLevelText } from "../../utils/textDisplay";

const QuizMedium = (props) => {
  const [category, setCategory] = useState("");

  const urlPicked = urls.find((url) => url.includes(category));

  const [isLoading, errorMessage, data] = useFetchAPI(urlPicked);

  const [openQuizMediumModal, setOpenQuizMediumModal] = useState(false);

  const [disabled, setDisabled] = useState(false);

  props.setQuizEasyStyle("trivia-item__buttonGreen")

  props.setScoreIcon(LotusImg);
  props.setLinkToPage("/guessnumber");
  props.setTextDisplay(mediumLevelText);
  const trophiesDisplay = totalResultMedium;
  const currentPrize = LotusGoldImg;

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
        setTextDisplay={props.setTextDisplay}
      />
    );

  return (
    <QuizMediumStyled>
      <div className="canvas">
        <div className="fog-anime">
          <div class="fog-img fog-img-first"></div>
          <div class="fog-img fog-img-second"></div>

          <Navbar className="nav" reload={props.reload} />

          <div className="quiz-container">
            <div className="content">
              <Score className="score" totalResult={props.totalResult} />

              {openQuizMediumModal && contents}

              {!openQuizMediumModal && (
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
                  <h1>Welcome to the Round 2</h1>
                  <img className="mermaid" src={mermaidImg} alt="mermaid" />

                  <p>
                    While you were swimming in the forest lake, a mermaid
                    captured you. Now you have to answer to at least half of the
                    intermediate level of questions, earn the water lilies and
                    exchange them to a Golden Water Lily that will help you get
                    out of the lake.
                  </p>

                  <h3>Choose category:</h3>
                  <div className="categories">
                    {categories.map((el) => (
                      <button
                        className="btn btn-bubble"
                        key={el.code}
                        onClick={() => setCategory(el.code)}
                      >
                        {el.category}{" "}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={disabled}
                    className="btn-start-quiz"
                    onClick={() => {
                      setOpenQuizMediumModal(true);
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
    </QuizMediumStyled>
  );
};

export default QuizMedium;
