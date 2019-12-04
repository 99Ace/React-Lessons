import React from 'react'

//  { props.bookingDetail.name}<br/>
//                 { props.bookingDetail.email}<br/>
//                 { props.bookingDetail.gender}<br/>

export default function Summary (props){
    return (
            <div>
                <h1> Confirmation </h1>
                <ul>
                    <li>{props.data.user.name}</li>
                </ul>
               
            </div>
            
        )
}