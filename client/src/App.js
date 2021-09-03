import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import SignUp from './components/SignUp/SignUp.js';
import LogIn from './components/LogIn/LogIn.js';


function App() {
  return (
    
    <div className="App">
    <NavBar/>
    <Router>
        <Switch>

          <Route path= "/home" component ={Home}/> 
          <Route path = "/login" component ={LogIn}/> 
          <Route path = "/signup" component = {SignUp}/>
         
        </Switch>
    </Router>
      
    
    </div>
    
  );
}

export default App;
