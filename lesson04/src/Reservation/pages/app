import React from 'react';
import './App.css';
import Register from './Reservation/pages/Register.js'
import Summary from './Reservation/pages/Summary.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default class App extends React.Component {
  state = {
    user : {
      name : '',
      email : '',
      gender: '',
      
    }
  }
  updateAppUser =(user)=> {
    this.setState ({
      user: user
    })
  }
  render () {
    return (
      <div style={{ backgroundColor : 'lightblue', height:'100vh', 
                    padding:'10px',textAlign:'center'}}>
        <Router>
          <Link exact to='/'> Register </Link> | 
          <Link exact to='/summary'> Summary </Link>
        
          <Switch> 
            <Route path="/summary"> 
                <Summary data = {this.state}/>
            </Route>
            
            <Route path="/" render={
                (props) =>  <Register {...props} updateUser={this.updateAppUser}/> 
            }> 
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


