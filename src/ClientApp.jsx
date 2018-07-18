import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Trainee from './pages/Trainee';


export default class ClientApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/trainee/:traineeName" exact component={Trainee} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}