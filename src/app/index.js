import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbarcomp } from '../components'
import { QuizList, QuizInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return (
        <Router>
            <Navbarcomp />
            <Switch>
                <Route path="/" exact component={QuizList} />
                <Route path="/addQues" exact component={QuizInsert} />
            </Switch>
        </Router>
    )
}

export default App
