import React from "react";
import "./QuizBox.scss";

class QuizBox extends React.Component {
  render() {
    return (
      <div className="wrapper-quizbox">
        <div className="quizbox-container">
          <div className="content">
            <h1>Reactjs Quiz</h1>
            <div></div>
            <p>0% complete</p>
          </div>
          <div className="question">
            <p>What is the full form of HTTP?</p>
            <div>
              <p>a. Hyper text transfer package</p>
            </div>
            <div>
              <p>b. Hyper text transfer protocol</p>
            </div>
            <div>
              <p>c. Hyphenation text test program</p>
            </div>
            <div>
              <p>d. None of the above</p>
            </div>
          </div>
          <div className="footer">
            <button>Back</button>
            <button>Skip</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizBox;
