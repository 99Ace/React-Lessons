import React from 'react'

export default class Register extends React.Component {
    state = {
        name    :   '',
        email   :   '',
        gender  :   '',
    }
    
    register =()=> {
        this.props.updateUser(this.state)
        this.props.history.push('/summary')
    }
    
    changeHandler =(event)=> {
        let field = event.target.name
        this.setState ({
            [field] : event.target.value
        })
    }
    
    render () {
        return (
            <div>
                <h1> Booking </h1>
                <input type='text' name='name' onChange={this.changeHandler} placeholder='Enter your Name'/> <br/>
                <input type='text' name='email' onChange={this.changeHandler} placeholder='Enter your Name'/> <br/>
                <input type='radio' name='gender' onChange={this.changeHandler} value='male'/> Male
                <input type='radio' name='gender' onChange={this.changeHandler} value='female'/> Female <br/>
                <button onClick={ this.register }> Book </button>
            </div>
    )
     
    }
}