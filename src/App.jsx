import "./App.css";
import { HeroesProvider } from "./context/HeroesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HeroDetail from "./components/HeroDetail";

function App() {
  return (
    <HeroesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero/:id" element={<HeroDetail/>}/>
        </Routes>
      </BrowserRouter>
    </HeroesProvider>
  );
}

export default App;
