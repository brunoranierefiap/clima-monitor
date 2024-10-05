import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Crie esse arquivo depois
import Monitoramento from './components/Monitoramento'; 
import Alertas from './components/Alertas';
import Forum from './components/Forum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
