import React from 'react'

export default class Validation extends React.Component {
    state = {
        name : '',
        password : '',
        termsAndCondition : false,
        submit : false,
        checkName : null,
        checkPass : null,
        checkTC : null,
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
    
    tc=()=> {
        this.setState ({
            termsAndCondition : !this.state.termsAndCondition
        })
    }
    
    register=()=> {
        this.setState ({
            submit : true,
        })
        //check the length of name and verify if met requirement
        if ((this.state.name).length < 3) {
            this.setState ({
                checkName : false,
            })
        }
        else {
            this.setState ({
                checkName : true,
            })
        }
        // check the t&c box is selected
        this.setState ({
            checkTC : this.state.termsAndCondition,
        })
      
        //check for ASCII code for special char in password
        let password = this.state.password
        let length = password.length
        let count = 0
        this.setState ({
                checkPass : false,
        })
        
         
        // while (count < length){
        //     let check = password.charCodeAt(count)
        //     if (check >= 33 && check <= 41){
        //         count = length
        //         this.setState ({
        //             checkPass : true,
        //         })
        //     }
        //     count += 1;
        // }
        let specialChar = ['!','@','#','$','%','^','&','*','(',')']
        let string = this.state.password
        let found = false
        for (let c in specialChar){
            if (string.include(c)){
                found = true
            }
        }
        this.setState ({
            checkPass:found,
        })
        
        
    }
    
    render () {
        return (
            <div>
                <div>
                    <div> 
                        <label>Name : </label> 
                        <input type='text' name='name' onChange={this.changeHandler}/>
                    </div>                
                    <div> 
                        <label>Password : </label> 
                        <input type='text' name='password' onChange={this.changeHandler}/>
                    </div>                    
                    <div> 
                        <input type='checkbox' name='termsAndCondition' defaultChecked={this.state.termsAndCondition} onChange={this.tc}/> I accept the terms & conditions
                    </div>
                    <div> 
                        <button style={{ backgroundColor:'grey', color:'white' }} onClick={this.register}> Register </button>
                    </div>
                </div>
                {((this.state.checkName == true&&this.state.checkTC==true&&this.state.checkPass==true)) ? <p> Congrats.. You are into the Game! </p> :null }
                
                <ul> 
                    {this.state.checkName==false? <li> Your username is less than 3 character </li>:null}
                    {this.state.checkPass==false?<li> Please have at least one of these characters in your password <b>!@#$%^&*()</b> </li>:null}
                    {this.state.checkTC==false?<li> Please click the checkbox to accept the Terms and conditions </li>:null}
                </ul>
                
            </div>
        )
    }
}