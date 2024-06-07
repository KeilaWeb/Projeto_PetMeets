import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar'; // Importação do Navbar
import { Home } from './pages/Home';
import "./styles/main.sass";

function App() {
  return (
    <Router>
      <Navbar /> {/* Renderização do Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
