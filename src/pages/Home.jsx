import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = data;
        
    }
    render() {
        const trainees = this.state.trainees.map(
            (item, index) => {
            return <li key={index}>
                        <Link to={`/trainee/${item.id}`}>
                            {item.name + ' (' + item.progress + '%)'}
                        </Link>
                    </li>
                
            }  
        )  
        return (
            <div>
                <h1 className="home-header">Number of trainees: {this.state.trainees.length}</h1>
                <ul>{trainees}</ul>
            </div>
        );
    }
}