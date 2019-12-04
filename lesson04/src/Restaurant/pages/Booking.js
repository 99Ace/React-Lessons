import React from 'react'

export default class Booking extends React.Component {
    state = {
        name    :   '',
        email   :   '',
        gender  :   '',
    }
    
    changeHandler=(event)=>{
        let field = event.target.name
        this.setState({
          [field] : event.target.value
          
        })
    }
    //Working with rendering to new page
    updateAll =()=> {
        this.props.confirmBooking({
            name    :   this.state.name,
            email   :   this.state.email,
            gender  :   this.state.gender,
        })
    }
    
    
    // function to get input and present in new page
    // updateAll()
    // {
    //     this.props.confirmBooking(
    //         {
    //         name    :   this.state.name,
    //         email   :   this.state.email,
    //         gender  :   this.state.gender,
    //         }
    //     )
    //     this.props.history.push('/view-count');
    // }

    render () {
        return (
            <div>
                <h1> Booking </h1>
                <input type='text' name='name' onChange={this.changeHandler} placeholder='Enter your Name'/> <br/>
                <input type='text' name='email' onChange={this.changeHandler} placeholder='Enter your Name'/> <br/>
                <input type='radio' name='gender' onChange={this.changeHandler} value='male'/> Male
                <input type='radio' name='gender' onChange={this.changeHandler} value='female'/> Female <br/>
                <button onClick={ this.updateAll }> Book </button>
                {this.state.name} <br/>
                {this.state.email} <br/>
                {this.state.gender} <br/>
            </div>
    )
     
    }
    
}