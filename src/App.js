import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        
      <Header />
      <Body />

      </Router>
      
    </div>
  );
}

export default App;
