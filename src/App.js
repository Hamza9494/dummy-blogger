import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Create from "./Create";
import Home from "./Home";
import Blogs from "./Blogs";
import BlogDetails from "./Blog-details";
import EditBolg from "./Edit-blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/edit-blog/:id" element={<EditBolg />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog-details/:id" element={<BlogDetails />}></Route>
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
