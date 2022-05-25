import "./styles.css";
import Header from "../src/components/Header";
import BlogPage from "../src/components/BlogPage";
import HomePage from "../src/components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
