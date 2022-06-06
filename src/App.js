import logo from './logo.svg';
import './App.css';
import { Timer } from './component/Timer';
function App() {
  return (
    <div className="App">
    <Timer inital={0} end={3}/> 
    </div>
  );
}

export default App;
