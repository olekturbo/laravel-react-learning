import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectsList'
import NewProject from "./NewProject";
import SingleProject from "./SingleProject";

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ProjectsList} />
                        <Route path='/project/create' component={NewProject} />
                        <Route path='/project/:id' component={SingleProject} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
