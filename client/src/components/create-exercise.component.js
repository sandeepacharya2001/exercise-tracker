import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
let config = require('../config');
export default class CreateExercises extends Component {
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration =  this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
        }
    }

    componentDidMount(){
            axios.get(`${config.SERVER_URI}/users`)
            .then(res => {
                if (res.data.length>0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
            .catch(err=>console.log(err));

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        console.log(date);
        this.setState({
        date: date
        })
    }
    
    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }


        axios.post(`${config.SERVER_URI}/exercises/add`, exercise)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        
        window.location = '/';
    }

    render(){
        return (
            <div>
               <h3>Create New Exercise Log</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username: </label>
                       <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}>
                           {
                           this.state.users.map(function(user){
                               return <option
                               key={user}
                               value={user}>
                                {user}
                               </option>
                           })
                        }
                       </select>
                   </div>
                   <div className="form-group">
                       <label>Description: </label>
                       <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                   </div>
                   <div className="form-group">
                       <label>Duration (in minutes): </label>
                       <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                   </div>
                   <div className="form-group">
                       <label>Date: </label>
                       <div>
                           <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                       </div>
                   </div>
                   <div className="form-group">
                       <input type="submit" onSubmit={this.onSubmit} value="Create Exercise Log" className="btn btn-primary" />
                   </div>
               </form>
            </div>
        )
    }
}