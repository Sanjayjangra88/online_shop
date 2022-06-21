
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";
// import Views from "./views";
import Front from './components/Front';
// import Navbar from './components/Navbar';
// // import Shop from './components/Shop';
// import Slide from './components/Slide';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Front />} />
      </Routes>
    </Router>
  );
}

export default App;
