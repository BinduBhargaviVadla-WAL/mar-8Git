import logo from './logo.svg';
import './App.css';
import BasicTable from './ExampleTables/BasicTable';
import Sorting from './ExampleTables/Sorting';
import Pagination from './ExampleTables/Pagination';
import ExpandableRows from './ExampleTables/ExpandableRows';
import SelectableRows from './ExampleTables/SelectableRows';


function App() {
  return (
    <div className="App">
       <BasicTable/>
      <Sorting/>
      <SelectableRows/>
      <ExpandableRows/>
      
      <Pagination/> 
    </div>
  );
}

export default App;
