import React, { Component } from 'react'
import Math from "./components/Math/index.js";
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
    operatorPressed: false,
    isCalculated: false,
    result: ''
  }

  handleNumOne = value => {
    this.setState({ numOne: this.state.numOne.concat(value) })
    console.log(this.state.numOne.concat(value))
  }
  handlenumTwo = value => {
    this.setState({ numTwo: this.state.numTwo.concat(value) })
    console.log(this.state.numTwo.concat(value))
  }
  handleOperator = value => {
    this.setState({ operator: this.state.operator.concat(value) })
    console.log(this.state.operator.concat(value))
  }
  handleNumOne = value => {
    this.setState({ numOne: this.state.numOne.concat(value) })
    console.log(this.state.numOne.concat(value))
  }
  handleEnterNumber = value => {
    if (this.state.numOne === '' && this.state.numTwo === '') {
      this.setState = numOne
    }


  }

  handleOperatorPressed = value => {

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
