import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import GamePage from "./pages/GamePage/GamePage";
import PageLayout from "./layouts/PageLayout/PageLayout";
import CvPage from "./pages/CvPage/CvPage";
import StarWarsPage from "./pages/StarWarsPage/StarWarsPage";
import WeatherPage from "./pages/WeatherPage/WeatherPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starwars" element={<StarWarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/cvpage" element={<CvPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
