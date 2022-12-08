// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// reset-css
import GlobalStyle from "./styles/GlobalStyle";

// components
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MovieSection from "./components/MovieSection"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<MovieSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
