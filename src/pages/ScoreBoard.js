import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import cong from './cong.jpg'

export class ScoreBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obtMarks: 0,
            totalQ: this.props.Quesdata.length,
            maxMarks: this.props.Quesdata.length * 4

        }
    }
    calculatemarks = () => {
        let marks = 0;
        for (let i = 0; i < this.props.Quesdata.length; i++) {
            if (this.props.Quesdata[i].answer === this.props.uchoices[i]) {
                marks = marks + 4;
                console.log(this.props.Quesdata[i].answer, this.props.uchoices[i]);
            } else {
                marks = marks - 1;
            }
        }
        this.setState({ obtMarks: marks });
    }
    render() {
        return (
            <>
                <Card  >
                    <Card.Header style={{ background: "#fff666", fontSize: "30px", textAlign: "center" }}>Score Card</Card.Header>
                    <Card.Body >
                        <p style={{ fontSize: '20px', float: 'right' }}>Maximum marks :{this.state.maxMarks}</p>
                        <p style={{ fontSize: '20px' }}>Total Questions :{this.state.totalQ}</p>
                        <br />
                        <center>
                        <img style={{ padding: '1rem', borderRadius: '1rem', width: 200, display: 'flex' }} alt="..." src={cong} />
                            <p style={{ fontSize: '30px' }}>You have Scored <em style={{ color: 'red' }}>{this.state.obtMarks}</em></p>
                        </center>
                        <Button variant="primary" onClick={this.calculatemarks}>Calculate Score</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default ScoreBoard
