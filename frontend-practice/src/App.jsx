import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddHabit from "./components/AddHabit";
import ViewHabits from "./components/ViewHabits";
import GetHabit from "./components/GetHabit";

import "./components/style.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2>Habit Tracker</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/add">Add Habit</Link>
            <Link to="/view">View Habits</Link>
            <Link to="/get">Get Habit</Link>
            
          </div>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddHabit />} />
            <Route path="/view" element={<ViewHabits />} />
            <Route path="/get" element={<GetHabit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
