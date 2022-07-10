import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MonthStatistics from "./pages/MonthStatistics";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<MonthStatistics />} />
      </Routes>

    </div>
  );
}

export default App;
