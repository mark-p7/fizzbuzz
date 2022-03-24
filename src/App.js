// React Router Dom import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap/Popper/Jquery imports
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Pages import
import HomePage from './pages/HomePage';
import ErrorPage from './pages/404';
import PrivacyPage from './pages/PrivacyPage';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Home/Privacy" element={<PrivacyPage />} exact />
        <Route path="/*" element={<ErrorPage />} exact />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
