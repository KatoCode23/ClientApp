import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            trainees: [
                {name: 'Sina', progress: 50},
                {name: 'Tara', progress: 75},
                {name: 'Eleen', progress: 80},
                {name: 'Kalen', progress: 40}
            ]

        };
    }

    render() {
        const trainees = this.state.trainees.map(
            (item, index) => {
                return <li key={index}>{item.name + ' (' + item.progress + '%)'}</li>
            }  
        )  
        return (
            <div>
                <h1>Number of trainees: {this.state.trainees.length}</h1>
                <ul>{trainees}</ul>
                <Link to="/about">About</Link>
            </div>
        );
    }
}