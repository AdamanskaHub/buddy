import React, { Component } from 'react';
import './App.css';
import {
  Main, Place, Chara, TextBox, Text,
} from './components';
import lady from './img/lady.png'

class App extends Component {

  constructor() {
    super();
    this.textChoice = this.textChoice.bind(this);
    this.nextText = this.nextText.bind(this);

    this.state = {
      selected: "base",
    };

  }
  componentWillMount() {
    // Simulate API response
    const speech = [ //smile
      "Are you ready to give it your all?",
      "Glad to see you're ready to work.",
      "Less talk more action.",
      "Now it's just about doing it.",
    ]
    this.setState({ speech })
    const speech1 = [ 
      "AAA",
      "BBB",
    ]
    this.setState({ speech1 })
    // Did you wake up early - moral / next
    // Do some meditation - 
    // Do plank
    // Do some sport >> abs/stretching
    // Green tea
    // 
  }

  componentDidMount() {
    this.textChoice("speech")
  }

  textChoice(choice) {
    let random = this.state[choice][Math.floor(Math.random() * this.state[choice].length)];
    this.setState({ selected: random })
  }

  nextText() {
    let newText = this.state.speech+1;
    this.setState({ selected: random })
  }



  render() {
    return (
      <Main>
        <Place>
          <Chara src={lady} />
          {this.question ?
            <div>
              <Question>
                <QuestionText>{this.state.questionA}</QuestionText>
              </Question>
              <Question>
                <QuestionText>{this.state.questionB}</QuestionText>
              </Question>
            </div>
            : null}
          <TextBox onClick={this.nextText}>
            <Text>{this.state.selected}</Text>
          </TextBox>
        </Place>
      </Main>
    );
  }
}

export default App;

