import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './login.css';


import Navbar from "./components/layouts/Navbar";
import Login from "./components/pages/login";
import Inicio from './components/layouts/Inicio';
import Contacto from './components/layouts/Contacto';
import Nosotros from './components/layouts/Nosotros';

const Routing = () =>{
  return(
    <Switch>
      <Route exact path='/Inicio' component={Inicio}/>
      <Route exact path='/Contacto' component={Contacto}/>
      <Route exact path='/Nosotros' component={Nosotros}/>
      <Route exact path='/Login' component={Login}/>
    </Switch>
  ) 
}

function App() {
  return (
    <>
    <Router>
  < Navbar />
  <Routing />
  </Router>
  </>
  );
}

export default App;
