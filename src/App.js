// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// reset-css
import GlobalStyle from "./styles/GlobalStyle";

// components
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MovieTimeSection from "./components/MovieTimeSection"
import MovieSeatsSection from "./components/MovieSeatsSection";

function App() {

  const [movieInfo, setMovieInfo] = useState([])
  const [timeInfo, setTimeInfo] = useState([])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/sessoes/:idFilme"
          element={<MovieTimeSection movieInfo={movieInfo} setMovieInfo={setMovieInfo} setTimeInfo={setTimeInfo}/>} />
        <Route
          path="/assentos/:idSessao"
          element={<MovieSeatsSection movieInfo={movieInfo} timeInfo={timeInfo}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
