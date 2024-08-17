import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
    </Router>
  );
}

export default App;
