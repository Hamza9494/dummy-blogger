import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
