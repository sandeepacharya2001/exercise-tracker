import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
let config = require('../config');

function Exercise(props) {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#"  onClick={()=> props.deleteExercise(props.exercise._id)}>delete</a>
            </td>
        </tr>
    )
}

export default class ExerciseList extends Component {
 
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.exerciseList = this.exerciseList.bind(this);

        this.state = {exercises: []}
    }

    componentDidMount(){
        axios.get(`${config.SERVER_URI}/exercises/`)
        .then(response=> {
            this.setState({exercises: response.data})
        })
        .catch(error=>console.log(error))
    }

    deleteExercise(id) {
        axios.delete(`${config.SERVER_URI}/exercises/`+id)
        .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList(){
        return this.state.exercises.map( currentExercise => {
            return <Exercise exercise = {currentExercise} key={currentExercise._id} deleteExercise={this.deleteExercise} />
        })
    }

    render(){
        return (
            <div>
                <h3>Logged Exercise</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration(Minutes)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
            
        )
    }
}