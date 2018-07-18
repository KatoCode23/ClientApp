import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {inchesToCm, poundsToKilos, restingMetabolicMan} from '../utils/numbers.util';

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
                <h1>Name: {currentTrainee.name}</h1>
                <h2>Percent Effective: {currentTrainee.progress}%</h2>
                <h3>Height in Inches: {currentTrainee.height}in.</h3>
                <h3>Weight in Pounds: {currentTrainee.weight}Lbs.</h3>
                <h3>Age: {currentTrainee.age}</h3>
                <h4>Height in Cm: {inchesToCm(currentTrainee.height)}</h4>
                <h4>Weight in Kilos: {poundsToKilos(currentTrainee.weight)}</h4>
                <h4>RMR: {restingMetabolicMan(currentTrainee.height, currentTrainee.weight, currentTrainee.age)}</h4>
                <Link to="/">Home</Link>
            </div>
        );
    }
}