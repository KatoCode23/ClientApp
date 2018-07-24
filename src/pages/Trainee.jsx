import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {inchesToCm, poundsToKilos, restingMetabolic} from '../utils/numbers.util';

export default class Trainee extends React.Component {
    constructor(props){
        super();
            const id = props.match.params.traineeName;
            this.state = {
                currentTrainee: data.trainees[id]
            };
    }
    render() {
        const currentTrainee = this.state.currentTrainee;
        console.log(this.state);
        return (
            <div>
                <h2 className="name">{currentTrainee.name}</h2>
                <p>Gender: {currentTrainee.gender}</p>
                <p>Age: {currentTrainee.age}</p>
                <p>Percent Effective: <span className="percent">{currentTrainee.progress}%</span></p>
                <p className="measurements">Height in Inches: {currentTrainee.height}in.</p>
                <p className="measurements">Weight in Pounds: {currentTrainee.weight}Lbs.</p>
                <p className="measurements">Height in Cm: {inchesToCm(currentTrainee.height)}</p>
                <p className="measurements">Weight in Kilos: {poundsToKilos(currentTrainee.weight)}</p>
                <p>RMR: {restingMetabolic(currentTrainee)}</p>
                <Link to="/"><i className="fas fa-home"></i></Link>
            </div>
        );
    }
}