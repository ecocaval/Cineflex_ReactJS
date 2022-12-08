import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
