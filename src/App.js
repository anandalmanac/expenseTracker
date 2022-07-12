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
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { remove_user, set_user } from './store/actions/user';
import { useDispatch } from 'react-redux';
import { db } from './store/firebase/firebase';
import {doc,onSnapshot,collection, getDocs} from 'firebase/firestore'


function App() {
  const dispatch=useDispatch()
  const [userData,setUserData]=useState(null)
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
    useEffect(() => {
   const colref = collection(db,'users')
   getDocs(colref)
   .then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data())
    })
   })

 

  }, []);
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
