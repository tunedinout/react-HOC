import React from 'react';
import DataSource from '../datasource';
import './dataSource.css';

class DataSourceForm extends React.Component{
    constructor(){
        super();
        this.state = DataSource;
        this.state = {
            ...this.state,
            inputValue: ''
        }
    }

    handleAddItem(event){
        this.setState({inputValue: event.target.value});
       
    }
    onSubmit(){
        this.state.addItem(this.state.inputValue);
        this.setState({inputValue: ''});
    }
    onSubmitColor(){
        console.log('color added');
        this.state.addColor(this.state.inputValue);
        this.setState({inputValue: ''});
    }
    render(){
        console.log(this.state);
        return (
            <div className="data-form">

                <input type='text' value={this.state.inputValue} onChange={(event)=>this.handleAddItem(event)}/>
                <button className="submit-btn" type='submit' onClick={()=>this.onSubmit()} > Add Item </button>
                <button className="submit-btn_color" type='submit' onClick={()=>this.onSubmitColor()} > Add Color </button>  
             </div>
        )
    }
}

export default DataSourceForm;