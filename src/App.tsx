import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { ThemeProvider } from "./context/ThemeProvider";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<Experience />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
