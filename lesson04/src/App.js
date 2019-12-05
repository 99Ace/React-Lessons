import React from 'react'
import axios from "axios"
import 'bulma/css/bulma.css'
import PersonList from './todoList/Person'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  state={
    data : [] // empty array
  } 

  loadData (){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => {
          this.setState({
              data: response.data
          })
      })
  }
  
  render () {
    
    return (
      <div className='App block' style={{padding: '20px'}}>
        <h1 className='title is-2'>MAGICAL TO DO LIST</h1>
        <PersonList/>
      </div>
      )
  }
    
}

export default App