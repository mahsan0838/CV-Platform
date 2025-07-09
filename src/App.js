import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import PassReset from './pages/PassReset.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pass" element={<PassReset />} />
      </Routes>
    </Router>
  );
}

export default App;
