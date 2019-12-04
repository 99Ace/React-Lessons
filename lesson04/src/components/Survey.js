import React from 'react'

export default class Survey extends React.Component {
    
    state = {
        name : '',
        gender : '',
        how_u_heard : {
            wordOfMouth :false,
            socialMedia:false,
            others:false
        }, //array because there are more than 0ne data to store
    }
    
    render () {
        return (
            <div>
                <div>
                    <label>Name: </label>
                    <input tyoe ='text'/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type='radio' name='gender' value='male' />
                    <input type='radio' name='gender' value='female'/>
                </div>
                <div>
                    <input type='checkbox' value='Social Media'/> Social Media
                    <input type='checkbox' value='Referral'/> Referral
                    <input type='checkbox' value='Others'/> Others
                </div>
                <div>
                    <select name='country'>
                        <option value='Singapore'>Singapore</option>
                        <option value='Malaysia'>Malaysia</option>
                        <option value='Europe'>Europe</option>
                    </select>
                </div>
            </div>
        )
    }
}