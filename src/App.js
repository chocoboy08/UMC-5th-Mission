import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tv" element={<TV />}></Route>
        <Route path="/celebrity" element={<Celebrity />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
