import React, {useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//Pages
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import firebaseConfig from './Config/firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'
import {UserContext} from './Context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'


//Firebase init
firebase.initializeApp(firebaseConfig)





const App = () => {

  const [user,setUser] = useState(null)

  return(
      <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="*"><NotFoundPage /></Route>
        </Switch>
        </UserContext.Provider>
      </Router>
  )
}

export default App;
