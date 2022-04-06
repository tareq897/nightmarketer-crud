import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import List from './components/List/List'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/" element={<List/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
