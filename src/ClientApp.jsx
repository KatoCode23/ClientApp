import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const MainLayout = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default class ClientApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                </MainLayout>
            </BrowserRouter>
        );
    }
}