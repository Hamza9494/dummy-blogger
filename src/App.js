import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
