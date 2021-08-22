
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming Convention
    <div className="App">
      
      <div className = "app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
