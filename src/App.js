
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <>
      <Router>
       <Navbar />
      </Router>
    </>
  );
}

export default App;
