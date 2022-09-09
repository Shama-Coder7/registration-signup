import Home from './components/Home';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [user, setLoginUser] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
