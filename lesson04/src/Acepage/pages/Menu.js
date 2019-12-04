import React from 'react'
import '../menu.css'
import {Link} from "react-router-dom"


export default class Home extends React.Component {
    state = {
        backgroundColor : 'black',
        color : 'white'
    }
    
    
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <ul className='navbar'> 
                <li>    <Link to='/'>About Me</Link>            </li>
                <li>    <Link to='/education'>Education</Link>  </li>
                <li>    <Link to='/work'>Work Experience</Link> </li>
                <li>    <Link to='/contact'>Contact Me</Link>   </li>


            
            </ul>
            
            
        )
    }
}