// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// reset-css
import GlobalStyle from "./styles/GlobalStyle";

// components
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MovieTimeSection from "./components/MovieTimeSection"
import MovieSeatsSection from "./components/MovieSeatsSection";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<MovieTimeSection />} />
        <Route path="/assentos/:idSessao" element={<MovieSeatsSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
