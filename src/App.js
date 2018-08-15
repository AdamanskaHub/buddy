import React, { Component } from 'react';
import './App.css';
import {
  Main, Place, Top, Chara, TextBox, Text, QuestionContainer, Question, QuestionText,
} from './components';
import lady from './img/lady.png'

class App extends Component {

  constructor() {
    super();
    this.textChoice = this.textChoice.bind(this);
    this.nextText = this.nextText.bind(this);
    this.ask= this.ask.bind(this);
    this.reply = this.reply.bind(this);

    this.state = {
      selected: "base",
      question: false,
      wakeUpBool: false,
      speech: [],
      wakeUp: [],
      answerYes: [],
      answerNo: [],
      answerSoon: [],
      intro: [],
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
    
  }

  componentDidMount() {
    this.textChoice("speech")

    // WAKE UP
    const wakeUp = [
      "When did you wake up?",
      "You woke up early, didn't you?",
    ]
    this.setState({ wakeUp })

    const answerYes = [
      "That's great. Now don't ruin it!",
      "Seize the day!",
    ]
    this.setState({ answerYes })

    const answerNo = [
      "I didn't do shit",
      "I behave like a larvae",
    ]
    this.setState({ answerNo })
    
    const answerSoon = [
      "On my way",
      "Doing it right now",
    ]
    this.setState({ answerSoon })
    // MEDITATION

    // Did you wake up early - moral / next
    // Do some meditation - 
    // Do plank
    // Do some sport >> abs/stretching
    // Green tea
    // fruit
    // apprendre
    // lire
  }

  textChoice(choice) {
    let random = this.state[choice][Math.floor(Math.random() * this.state[choice].length)];
    this.setState({ selected: random })
  }

  ask() {
    this.setState({ question: true })
    let randomYes = this.state.answerYes[Math.floor(Math.random() * this.state.answerYes.length)];
    this.setState({ answerYes: randomYes })
    let randomNo = this.state.answerYes[Math.floor(Math.random() * this.state.answerNo.length)];
    this.setState({ answerNo: randomNo })
    let randomSoon = this.state.answerSoon[Math.floor(Math.random() * this.state.answerSoon.length)];
    this.setState({ answerSoon: randomSoon })
  }

  nextText() {
    console.log("next text")
    if (!this.state.wakeUpBool) {
      this.textChoice("wakeUp");
      this.setState({ wakeUpBool: true })
      console.log(this.state.wakeUpBool)
    } if (this.state.wakeUpBool && !this.state.question) {
      this.ask();
    } else {
      console.log("next text error")
    }
  }

  reply(replyIs) {
    if (replyIs = "Yes") {
      console.log("nReplied Yes")
    } 
    if (replyIs = "No") {
      console.log("nReplied No")
    }
    if (replyIs = "Soon") {
      console.log("nReplied Soon")
    } else {
      console.log("nextText error")
    }
  }

  // updateText(whereAt) {
  //   let x = whereAt
  //   switch (x) {
  //     case "wakeUp":
  //       this.textChoice("wakeUp")
  //       break;
      
  //     default:
  //       console.log("default switch");
  //   }
  // }


  render() {
    return (
      <Main>
        <Place>
          <Top>
            <Chara src={lady} visibility={this.state.question ? "0.5" : "1"} />
            {this.state.question ?
              <QuestionContainer>
                <Question>
                  <QuestionText 
                  // onClick={this.reply("Yes")}
                  >{this.state.answerYes}</QuestionText>
                </Question>
                <Question>
                  <QuestionText //onClick={this.reply("No")}
                  >{this.state.answerNo}</QuestionText>
                </Question>
                <Question>
                  <QuestionText // onClick={this.reply("Soon")}
                  >{this.state.answerSoon}</QuestionText>
                </Question>
              </QuestionContainer>
              : null}
          </Top>
          <TextBox onClick={this.nextText}>
            <Text>{this.state.selected}</Text>
          </TextBox>
        </Place>
      </Main>
    );
  }
}

export default App;

