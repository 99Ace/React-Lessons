import React from 'react'

export default class Calculator extends React.Component{
    state = {
        num1 :'',
        num2 :'',
        operator:'add',
        result: 0,
        submit:false,
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
    radioHandler=(event)=> {
        this.setState ({
            operator : event.target.value
        })
    }
    calculateNow=()=> {
        let result = 0.0;
        let num1 = parseFloat(this.state.num1)
        let num2 = parseFloat(this.state.num2)
        result = num1 + num2;
        if (this.state.operator == 'add'){
            result = num1 + num2;
        }
        if (this.state.operator == 'minus'){
                    result = num1 - num2;
                }
        if (this.state.operator == 'divide'){
                    result = num1 / num2;
                }
        if (this.state.operator == 'multiply'){
                    result = num1 * num2;
                }
        
        this.setState ({
            result : result,
            submit : true,
        })
        // or you can do 
        // this.setState ({
        //      result      //same as result : result       
        // })
        
    }

    render () {
        return (
        <div>
            Smartest Calculator<br/>
            <div>
                <input type='text' name='num1' onChange={this.changeHandler} placeholder='Enter number 1'/><br/>
                <input type='text' name='num2' onChange={this.changeHandler} placeholder='Enter number 2'/><br/>
            </div>
            <div>

                <input type='radio' name='operator' onChange={this.radioHandler}  value='add' checked={this.state.operator==='add'}/> Add
                <input type='radio' name='operator' onChange={this.radioHandler}  value='minus' checked={this.state.operator==='minus'}/> Subtract
                <input type='radio' name='operator' onChange={this.radioHandler}  value='multiply' checked={this.state.operator==='multiply'}/> Multiply
                <input type='radio' name='operator' onChange={this.radioHandler}  value='divide' checked={this.state.operator==='divide'}/> Divide
            </div>
            <button onClick={this.calculateNow}>Calculate</button>
            
            {this.state.submit == true ?
             <p> Answer : {this.state.result} </p>: null }
        </div>
        )
    }
}