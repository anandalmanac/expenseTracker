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
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { remove_user, set_user } from './store/actions/user';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
        const auth = getAuth();
        auth.onAuthStateChanged((user)=>{
            if(user){
                
                dispatch(set_user(user))
                


            }else{
                dispatch(remove_user())
            }
        })
    },[])
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
