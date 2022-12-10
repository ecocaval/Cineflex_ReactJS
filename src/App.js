// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// reset-css
import GlobalStyle from "./styles/GlobalStyle";

// components
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MovieTimeSection from "./components/MovieTimeSection"
import MovieSeatsSection from "./components/MovieSeatsSection";
import SucessPage from "./components/SucessPage";

// libraries
import { useState } from "react";

function App() {

  const [movieInfo, setMovieInfo] = useState([])
  const [seatsInfo, setSeatsInfo] = useState([])
  const [selectedSeatsIds, setSelectedSeatsIds] = useState([])
  const [selectedSeatsNumbers, setSelectedSeatsNumbers] = useState([])
  const [buyer, setBuyer] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");

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
          element={<MovieTimeSection movieInfo={movieInfo} setMovieInfo={setMovieInfo} />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <MovieSeatsSection
              seatsInfo={seatsInfo}
              setSeatsInfo={setSeatsInfo}
              selectedSeatsIds={selectedSeatsIds}
              setSelectedSeatsIds={setSelectedSeatsIds}
              selectedSeatsNumbers={selectedSeatsNumbers}
              setSelectedSeatsNumbers={setSelectedSeatsNumbers}
              buyer={buyer}
              setBuyer={setBuyer}
              buyerCPF={buyerCPF}
              setBuyerCPF={setBuyerCPF}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SucessPage
              seatsInfo={seatsInfo}
              selectedSeatsNumbers={selectedSeatsNumbers}
              buyer={buyer}
              buyerCPF={buyerCPF}
              setMovieInfo={setMovieInfo}
              setSeatsInfo={setSeatsInfo}
              setSelectedSeatsIds={setSelectedSeatsIds}
              setSelectedSeatsNumbers={setSelectedSeatsNumbers}
              setBuyer={setBuyer}
              setBuyerCPF={setBuyerCPF}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
