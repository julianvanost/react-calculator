import React from 'react'
// import Math from "./components/Math.js";
import NumberButton from "./components/NumberButton/index.js";

const numOne = 0
const numTwo = 0
const operator = ''
const result = 0 || ''

class App extends Component {
  state = {
    numOne: '',
    numTwo: '',
    operator: '',
    result: ''
  }

  handleNumOne = value => {
    this.setState({ numOne: this.state.numOne + value })
  }
  handlenumTwo = value => {
    this.setState({ numTwo: this.state.numTwo + value })
  }
  handleOperator = value => {
    this.setState({ operator: this.state.operator + value })
  }
  handleNumOne = value => {
    this.setState({ numOne: this.state.numOne + value })
  }
  handleEnterNumber = value => {
    if (this.state.numOne === '' && this.state.numTwo === '') {
      this.setState = numOne
    }
    if (this.state.numOne != '' && this.state.operator = '') {
      handleNumOne(value)
    }

  }

  handleEnteredNumbers = value => {

  }


  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <NumberButton
          text={'1'}
          handleNumOne={this.handleNumOne} />
        <NumberButton
          text={'2'}
          handleNumOne={this.handleNumOne} />
        <NumberButton
          text={'3'}
          handleNumOne={this.handleNumOne} />
        <NumberButton
          text={'4'}
          handleNumOne={this.handleNumOne} />
        <NumberButton
          text={'5'}
          handleNumOne={this.handleNumOne}
        />
        <NumberButton
          text={'6'}
          handleNumOne={this.handleNumOne}
        />
        <NumberButton
          text={'7'}
          handleNumOne={this.handleNumOne}
        />
        <NumberButton
          text={'8'}
          handleNumOne={this.handleNumOne}
        />
        <NumberButton
          text={'9'}
          handleNumOne={this.handleNumOne}
        />
        <NumberButton
          text={'0'}
          handleNumOne={this.handleNumOne}
        />
      </div>
    )
  }
}

export default App
