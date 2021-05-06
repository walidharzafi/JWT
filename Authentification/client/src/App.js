import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';

// import Register from './Component/Register'
import Login from './Component/Login'
import Register from './Component/Register'
import Menu from './Component/menu'
import User from './Component/User'
import Technicien from './Component/Technicien'
 import ChangePassword from './Component/ChangePassword'




function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/admin" component={Register}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/user" component={User}/>
        <Route exact path="/technicien" component={Technicien}/>

      <Route exact path="/changepassword/:id" component={ChangePassword}/>
      </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
