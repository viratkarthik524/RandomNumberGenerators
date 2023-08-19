import React, {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickRandom = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: randomNumber,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="box">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.onClickRandom}>
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
