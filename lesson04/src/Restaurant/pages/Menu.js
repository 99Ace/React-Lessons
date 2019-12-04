import React from 'react'
import {Link} from "react-router-dom"


export default class Home extends React.Component {
    state = {
        backgroundColor : 'black',
        color : 'white'
    }
    
    render () {
        return (
            <ul className='navbar'> 
                <li>    <Link to='/'>Home</Link>            </li>
                <li>    <Link to='/booking'>Make a Booking</Link>  </li>
                <li>    <Link to='/confirmation'>Confirmation Page</Link> </li>
            </ul>
        )
    }
}