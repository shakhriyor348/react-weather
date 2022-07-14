import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import Home from "./pages/Home";
import MonthStatistics from "./pages/MonthStatistics";



function App() {
  return (
    <div className="global-container">
      {/* <PopUp /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
