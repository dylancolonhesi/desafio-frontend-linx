import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/brewery-home" element={<Home />} />
          <Route path={`/brewery-details/:id`} element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;