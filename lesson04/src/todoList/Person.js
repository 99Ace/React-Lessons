import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        this.loadData()

    }

    loadData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                this.setState({
                    persons: response.data
                })
            })
    }

    render() {
        return (
            <div>    
                <button onClick={this.loadData}>Reset Data</button>
    
                <ul>
                    { this.state.persons.map(person => <li>{person.title}</li>)}
                </ul>
            </div>
        )
    }
}