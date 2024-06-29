import './App.css';
import "./styles/main.sass";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FormPage from './pages/Form/FormPage';

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login";

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<FormPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
