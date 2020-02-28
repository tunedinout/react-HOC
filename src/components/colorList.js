import React from 'react';
import Color from './color';

// class ColorList extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             colors: DataSource.getColors(),
//         }
//         this.handleColorAdd = this.handleColorAdd.bind(this);
//     }
//     handleColorAdd(){
//         this.setState({colors: DataSource.getColors()});
//     }
//     componentWillMount(){
//         DataSource.subscribe(this.handleColorAdd);
//     }

//     componentWillUnmount(){
//         DataSource.unsubscribe(this.handleColorAdd);
//     }

//     render(){
//         return (
//             <div className="color-container">
//             {this.state.colors.map(
//                 (color) => 
//                 <Color value={color}/>
//                 )
//             }

//             </div>
//         );
//     }
// }
function ColorList(props) {
    return (
        <div className="color-container">
            {props.data.map(
                (color) => 
                {return <Color value={color}/>}
                )
            }

            </div>
    )
}
export default ColorList;