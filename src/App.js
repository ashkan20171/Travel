
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/pages/Home'
function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home} />
       </Switch>
      </Router>
    </>
  );
}

export default App;
