import React from 'react'
import Woody from './images/woody.jpg'

// export default class About extends React.Component {
//     state = {
//         likeCounter : 0,
//     }
    
//     updateSetting () {
//         this.props.updateSetting({
//             likeCounter : this.state.likeCounter,  
//         })
//         // or can do this way
//         // this.props.updateSettings({this.state})
//     }
    
//     increase = () => {
//         this.setState({
//             likeCounter : (this.state.likeCounter+1),
//         })
//         this.updateSetting()
//     }
//     render () {
//         return (
//             <div>
//                 <img src={Woody}/>
//                 <h1> Woody </h1>
//                 <button name='likeCounter' onClick={this.increase}>Like</button>
//                 <p>{this.state.likeCounter} people like it</p>
//             </div>
//         )
//     }
// }


let theme = [
  {backgroundColor: 'black', color : 'white'  },
  {backgroundColor: 'blue', color : 'white'  },
  {backgroundColor: 'pink', color : 'black'  },
  {backgroundColor: 'teal', color : 'brown'  },
]


export default function About(props){
   
    return (
            <div>
                <img src={Woody}/>
                <h1> Woody </h1>
                <button name='likeCounter' onClick={props.increaseCount}>Like</button>
                <p>{props.count} people like it</p>
                <div style= {{textAlign : 'center'}}>
                    <table>
                        <tr>
                        
                        <td><span style={{backgroundColor:props.theme[0].backgroundColor, color:props.theme[0].color, padding:'5px'}}> Theme 1 </span>
                        <input type='radio'  name='theme' value='0'/></td>
                        
                        <td><span style={{backgroundColor:props.theme[1].backgroundColor, color:props.theme[1].color, padding:'5px'}}> Theme 2 </span>
                        <input type='radio' name='theme' value='1'/></td>
                        
                        <td><span style={{backgroundColor:props.theme[2].backgroundColor, color:props.theme[2].color, padding:'5px'}}> Theme 3 </span>
                        <input type='radio' onChange={props.themeSelect} name='theme' value='2'/></td>
                        
                        <td><span style={{backgroundColor:props.theme[3].backgroundColor, color:props.theme[3].color, padding:'5px'}}> Theme 4 </span>
                        <input type='radio' onChange={props.themeSelect} name='theme' value='3'/></td>
                        
                        </tr>
                    </table>
                </div>
             </div>
        )
}