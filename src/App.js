import './App.css';
import "./styles/main.sass";
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HomePage } from './pages/Home/HomePage';
import { FormPage } from './pages';


function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/formPage" element={<FormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
