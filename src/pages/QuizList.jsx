import React, { Component } from 'react'
import Instructions from './Instructions';
import Quiz from './Quiz';
import ScoreBoard from './ScoreBoard';
import Review from './Review';


export class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [
        {questiontxt:"In which part of your body would you find the cruciate ligament?",
         choice:["knee","Thigh","Ear","Skull"],
         answer:"knee",
         subject:"General knowledge",
         time:"300",
         year:"2021"
      },
      {questiontxt:"What is the name of the main antagonist in the Shakespeare play Othello?",
         choice:["knee","Lago","Ear","Skull"],
         answer:"Lago",
         subject:"General knowledge",
         time:"300",
         year:"2021"
      },
      {questiontxt:"In which part of your body would you find the cruciate ligament?",
         choice:["knee","Thigh","Tin","Skull"],
         answer:"Tin",
         subject:"General knowledge",
         time:"300",
         year:"2021"
      },
      {questiontxt:"In which part of your body would you find the cruciate ligament?",
         choice:["All the President's Men","Thigh","Ear","Skull"],
         answer:"All the President's Men",
         subject:"General knowledge",
         time:"300",
         year:"2021"
      },
      {questiontxt:"In which part of your body would you find the cruciate ligament?",
         choice:["9","4","5","3"],
         answer:"3",
         subject:"General knowledge",
         time:"300",
         year:"2021"
      }
      ],
      userchoices: [],
      Subjects: ["Mathematics", "Quantitative Aptitude", "Analysis", "General English"],
      Years: [2020, 2019, 2018, 2017, 2016],
      Instruction: ["You have Total 5 Questions all Questions are Compulsory",
        "You will be rewarded 4 marks for every right attempt and -1 for Every Wrong attempt",
        "You have time Limit of 300sec",
        "All The Best."],
      Score: 0,
      isLoading: false,
    }
  }
  AddQues = (Q) => {
    this.setState({ questions: this.state.questions.push(Q) })
  }
  setuserchoice = (choice, Qno) => {
    let newuc = this.state.userchoices.slice()
    if (newuc[Qno - 1] !== undefined) {
      newuc.splice(Qno - 1, 1, choice)
      this.setState({ userchoices: newuc }, () => {
        console.log(Qno, this.state.userchoices)
        this.setState({ Score: this.state.userchoices.length }, () => { console.log(this.state.Score) })
      })
    } else {
      newuc.splice(Qno - 1, 0, choice)
      this.setState({ userchoices: newuc }, () => {
        console.log(Qno, this.state.userchoices)
        this.setState({ Score: this.state.userchoices.length }, () => { console.log(this.state.Score) })
      })
    }

  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })

  }

  render() {
    if (!this.state.questions.length) {
      return (<p>please Wait content is Loading</p>)
    } else {
      return (<div>
        <Instructions Instruction={this.state.Instruction} />
        <Quiz Quesdata={this.state.questions} setuc={this.setuserchoice} />
        <ScoreBoard Quesdata={this.state.questions} uchoices={this.state.userchoices} />
        <Review questions={this.state.questions} userchoices={this.state.userchoices} />
      </div>)
    }

  }
}

export default QuizList
