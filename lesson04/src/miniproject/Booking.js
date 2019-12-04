import React from 'react'
let style = {
    width : '400px',
    backgroundColor:'grey',
    padding:'10px'
}
export default class Booking extends React.Component{
    state = {
        name : '',
        email: '',
        diner:'',
        date:'',
        submit:false,
        message:''
    }
    constructor(props) {
        super(props);
    }
    
    changeHandler=(event)=> {
        let field = event.target.name;
        this.setState ({
            [field] : event.target.value
        })
    }
    change
    reservation=()=> {
        
        this.setState ({
            submit : true,
        })
        
    }
    message() {
        if (this.state.submit) {
            return (
                <p> Reservation under {this.state.name} for {this.state.diners} of diners on {this.state.date} is confirm and will be sent to your email at {this.state.email} </p>
                )
        }
        else {
            return null
        }
    }
    
    render () {
        return (
            <div style={style}>
                <div> 
                    <label>Name : </label> 
                    <input type='text' name='name' onChange={this.changeHandler}/>
                </div>
                <div> 
                    <label>Email : </label> 
                    <input type='text' name='email' onChange={this.changeHandler}/>
                </div>
                <div> 
                    <label> Number of diners : </label>
                    <select name='diner' onChange={this.changeHandler}>
                        <option value='1'> 1 diner</option>
                        <option value='2'> 2 diner</option>
                        <option value='3'> 3 diner</option>
                        <option value='4'> 4 diner</option>
                        <option value='5'> 5 diner</option>
                        <option value='6'> 6 diner</option>
                        <option value='7'> 7 diner</option>
                        <option value='8'> 8 diner </option>
                        
                    </select>
                </div>
                <div> 
                    <label>Date attending :</label> 
                    <input type='date' name='date' onChange={this.changeHandler}/>
                </div>
                <button onClick={this.reservation}> Make Reservation </button>
                <div>
                    {this.message()}
                </div>
                
                or you may do the following quote <br/>
                {this.state.submit == true ?
                    <p> Reservation under {this.state.name} for {this.state.diners} of diners on {this.state.date} is confirm and will be sent to your email at {this.state.email} </p>
                    : null }
               
                or you may do the following quote
                {this.state.submit == true ?
                    alert(` Reservation under : ${this.state.name} 
                            Number of diners :  ${this.state.diner} 
                            Date Reserved :  ${this.state.date} 
                            Confirmation sent to:  ${this.state.email}`)
                    : null }

            </div>
            
        )
    }
}