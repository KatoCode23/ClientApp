import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../store';
import {inchesToCm, poundsToKilos, restingMetabolic, workoutPercentEffective} from '../utils/numbers.util';

export default class Trainee extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        const name = this.props.match.params.traineeName;
        getData().then((trainees) => {
            const currentTrainee = trainees.find((trainee) => {
                return (trainee.name === name);
            });
            this.setState({
                currentTrainee
            })
        })
    }
    render() {
        const worldImage = require('../pics/3.jpg');
        let currentTrainee = null;
        let traineeElement = null;
        if (this.state.currentTrainee) {
            currentTrainee = this.state.currentTrainee;
            traineeElement = (
                <div className="main-content">
                    <header className="home-header"><div className="header-text">{currentTrainee.name}</div></header>
                    <Link to="/">
                    <span className="home-image" 
                        style={{ backgroundImage: "url(" + require(`../pics/${currentTrainee.img}.jpg`) + ")" }}>
                    </span>
                    </Link>
                    <table>
                        <tr>
                            <th className="category">Inches</th>
                            <th className="category">Pounds</th>
                            <th className="category">Cm</th>
                            <th className="category">Kilos</th>
                            <th className="category">Gender</th>
                            <th className="category">Age</th>
                            <th className="category">RMR</th>
                            </tr>
                        <tr>
                                <td className="category">{currentTrainee.height}</td>
                                <td className="category">{currentTrainee.weight}</td>
                                <td className="category">{inchesToCm(currentTrainee.height)}</td>
                                <td className="category">{poundsToKilos(currentTrainee.weight)}</td>
                                <td className="category">{currentTrainee.gender}</td>
                                <td className="category">{currentTrainee.age}</td>
                                <td className="category">{restingMetabolic(currentTrainee)}</td>
                        </tr>
                        <tr>
                                <th className="category">Percent Effective</th>
                        </tr>
                        <tr>
                                <td className="category">{workoutPercentEffective(currentTrainee)}</td>
                        </tr>
                    </table>
                    <div className="world-box"
                        style={{ backgroundImage: "url(" + worldImage + ")" }}>
                    </div>
            </div>)
        }
        return (
            <div> 
                {traineeElement}
            </div>
        );
    }
}