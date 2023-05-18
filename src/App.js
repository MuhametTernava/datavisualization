import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import TypingVisualization from "./pages/typing-visualization";
import UploadVisualization from "./pages/upload-visualization";
import RealTimeVisualization from "./pages/real-time-visualization";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route
            path="/typing-visualization"
            element={<TypingVisualization />}
            exact
          />
          <Route
            path="/upload-visualization"
            element={<UploadVisualization />}
            exact
          />
          <Route
            path="/real-time-visualization"
            element={<RealTimeVisualization />}
            exact
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
