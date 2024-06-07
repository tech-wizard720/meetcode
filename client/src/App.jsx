import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProblemSet from "./pages/ProblemSet";
import Problem from "./pages/Problem";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/me" element={<Dashboard/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problems" element={<ProblemSet />} />
          <Route path="/problems/:problemId" element={<Problem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
