import { Link } from 'react-router-dom';
import { HomeStyled } from './HomeStyled';
import Bubble from './Bubble';
import Footer from '../Footer';

const Home = (props) => {
  const n = 50;

  return (
    <HomeStyled>
      <div className="canvas">
        {[...Array(n)].map((el, index) => (
          <Bubble key={index} />
        ))}

        {/* <div className="contrainer-wrapper"> */}
          {/* <div className="outer-container"> */}
            <div className="container">
              <div>
                <h1>Mysterious </h1>
                <h1>Forest</h1>
              </div>
              <p>
                You are in the Mysterious Forest. To get out of it you need to
                pass several tests and earn a golden bump, a golden water lily
                and a golden acorn. Click on the "Get Started" button to get
                started.
              </p>

              <Link to="quizeasy" className="btn-begin-container">
                <button className="btn-begin"> Begin </button>
              </Link>
            </div>
          {/* </div> */}
        {/* </div> */}
        
      </div>
      <Footer />
    </HomeStyled>
  );
};

export default Home;
