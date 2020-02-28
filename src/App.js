import React from 'react';
import './App.css';
import DataSourceForm from './components/dataSourceForm';
import { ColorListWithSub, ItemListWithSub} from './wrappers/wrappers';

function App() {
  return (
    <div className="App">
     
      <DataSourceForm/>
      <ItemListWithSub />
      <ColorListWithSub/>
    </div>
  );
}

export default App;
