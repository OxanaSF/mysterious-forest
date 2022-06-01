
import styled from "styled-components";

function Stat(props) {
  return (
    <StatStyled>
      <div className="stats-label">{props.label}:</div>
      <div className="stats-value">{props.value}</div>
    </StatStyled>
  );
}


function Stats(props) {
  return (
    <StatsStyled>
      <Stat label="Score" value={props.score} />
      <Stat label="Question" value={`${props.questionNumber} / ${props.totalQuestions}`} />
    </StatsStyled>
  );
}






const StatsStyled = styled.ul`
display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 1rem 0;


`

const StatStyled = styled.li`
min-width: 100px;
    text-align: center;
    color: white;
    background: #554a8b;
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    letter-spacing: 1px;



  .stats-label {
    font-size: 0.7rem;
  }
  
  .stats-value {
    font-size: 1rem;
  }
`


export default Stats;