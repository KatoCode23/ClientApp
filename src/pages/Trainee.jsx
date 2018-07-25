import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../store';
import {inchesToCm, poundsToKilos, restingMetabolic} from '../utils/numbers.util';

export default class Trainee extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        const name = this.props.match.params.traineeName;
        getData().then((trainees) => {
            const currentTrainee = trainees.find((trainee) => {
                return (trainee.name == name);
            });
            this.setState({
                currentTrainee
            })
        })
    }
    render() {
        let currentTrainee = null;
        let traineeElement = null;
        if (this.state.currentTrainee) {
            currentTrainee = this.state.currentTrainee;
            traineeElement = (
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
            </div>)
        }
        return (
            <div>
                {traineeElement}
                <Link to="/"><i className="fas fa-home"></i></Link>
            </div>
        );
    }
}