import { Component } from "react";
import "./index.css";

class LettersCount extends Component {
  state = {
    textValue: "",
  };
  onChangeCount = (event) => {
    this.setState({
      textValue: event.target.value,
    });
  };
  render() {
    const { textValue } = this.state;
    const length = textValue.length;
    return (
      <div className="container">
        <div className="sm-image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="calculator"
            className="sm-image"
          />
        </div>
        <div className="flex">
          <div className="card-content">
            <h1>Calculate The Letters You Entered</h1>
            <div className="input-card">
              <label htmlFor="text-box">Enter Phase</label>
              <input
                type="text"
                value={textValue}
                id="text-box"
                onChange={this.onChangeCount}
              />
            </div>
            <div className="count-card">
              <strong>
                No Of Letters <b>{length}</b>
              </strong>
            </div>
          </div>
          <div className="lg-image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="calculator"
              className="lg-image"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default LettersCount;
