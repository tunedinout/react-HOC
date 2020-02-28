
import React from 'react';
import Item from './item';

// class ItemList extends Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             items : DataSource.getItems(),
//         }
//         console.log(this.state.items);
//     }
//     handleChange(){
//         console.log("Data changed");
//         this.setState({items: DataSource.getItems()});
//     }
//     componentDidMount(){
//         DataSource.subscribe(this.handleChange);
//     }
//     componentWillUnmount(){
//         DataSource.unsubscribe(this.handleChange);
//     }

//     render() {
//         return (
//             <div className="item-list">
//                  <ul>
//                 {
//                     this.state.items.map((item)=>{
//                         return <Item value={item} />
//                     })
//                 }
//                 </ul>
//             </div>
           
//         )
//     }
// }

function ItemList(props){
    return (
                    <div className="item-list">
                         <ul>
                        {
                            props.data.map((item)=>{
                                return <Item value={item} />
                            })
                        }
                        </ul>
                    </div>
                   
                )
}

export default ItemList;