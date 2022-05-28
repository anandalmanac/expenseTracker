import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Body/contents/profile/Profile';


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
