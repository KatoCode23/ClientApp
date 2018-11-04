import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../store';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        getData().then((trainees) => {
            this.setState({
                trainees
            })
        })
    }
    render() {
        let trainees = null;
        if (this.state.trainees) {
            trainees = this.state.trainees.map(
                (item, index) => {
                    return <li key={index}>
                        <Link to={`/trainee/${item.name}`}>
                            {item.name}
                        </Link>
                    </li>
                
            })
        }

        return (
            <div>
                <h1>Trainees</h1>
                <ul>{trainees}</ul>
            </div>
        );
    }
}