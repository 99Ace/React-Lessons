import React from 'react'

export default function Confirmation (props){
    return (
            <div>
                <h1> Confirmation </h1>
                { props.bookingDetail.name}<br/>
                { props.bookingDetail.email}<br/>
                { props.bookingDetail.gender}<br/>
            </div>
            
        )
}