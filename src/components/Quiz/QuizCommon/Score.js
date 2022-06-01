import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreStyled>
      <div className="score">
        Current Score:
        {props.totalResult}
      </div>
    </ScoreStyled>
  );
};

const ScoreStyled = styled.div`


  .letters {
    opacity: 0;
  }

  .lines {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-left: 0.5rem;
  }

  .line {
    border-bottom: 2.5px solid #554a8b;
    padding: 0;
    width: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pine {
    height: 3rem;
  }

  .lotus {
    height: 4.2rem;
  }

  .acron {
    height: 4rem;
  }


  @media (max-width: 600px) {
    .score {
      display: flex;
      flex-direction: column;
      min-height: 10rem;
    }
  }
`;

export default Score;
