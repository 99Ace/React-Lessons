import React from 'react';
import './App.css';
import Survey from './components/Survey.js'
import Booking from './miniproject/Booking.js'
import Calculator from './miniproject/Calculator.js'
import Validation from './miniproject/Validation.js'
import Education from './Acepage/pages/Education.js'
import Menu from './Acepage/pages/Menu.js'
import Contact from './Acepage/pages/Contact.js'
import Work from './Acepage/pages/Work.js'
import About from './Acepage/pages/About.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let theme = [
  {backgroundColor: 'black', color : 'white'  },
  {backgroundColor: 'blue', color : 'white'  },
  {backgroundColor: 'pink', color : 'black'  },
  {backgroundColor: 'teal', color : 'brown'  },
]
export default class App extends React.Component {
  state = {
    likeCounter : 0,
    themeBackgroundColor : 'black',
    themeTextColor : 'white',
  }
  
  // updateSetting =(settings)=> {
  //   this.setState({
  //     likeCounter : settings.likeCounter,
  //   })
  //   /* shortcut works for any number of settings*/
  //   /*
  //   this.setState({
  //     ...this.state,
  //     ...settings
  //   })
  //   */
    
  // }
  increaseLike=(event)=>{
    this.setState ({
      likeCounter : (this.state.likeCounter+1)
    })
  }
  themeUpdate =(event)=>{
    this.setState=({
      themeBackgroundColor : theme[event.target.value].backgroundColor,
      themeTextColor : theme[event.target.value].color,
      
    })
  }
  render () {
    return (
      <div style={{ backgroundColor : 'lightblue', height:'100vh', 
                    padding:'10px',textAlign:'center'}}>
      <Router>
        <Menu/>
        {this.state.likeCounter} like it in App<br/>
        {this.state.themeBackgroundColor}<br/>
        {this.state.themeTextColor}<br/>
        <Switch> 
        
          <Route path='/education'> 
            <Education count = {this.state.likeCounter}/>
          </Route>
  
           <Route path='/work'> 
            <Work/>
          </Route>
        
          <Route path='/contact'> 
            <Contact/>
          </Route>
          
          <Route path="/"> 
            <About  theme = {theme} increaseCount = {this.increaseLike} 
                    count = {this.state.likeCounter}  themeSelect={this.themeUpdate} />
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}


