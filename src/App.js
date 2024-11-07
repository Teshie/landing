import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";
import SubContent from "./components/SubContent";
import Content from "./components/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the LoginPage */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/content/:categoryId/" element={<Content />} />
        <Route path="/content/subcontent/:contentId/" element={<SubContent />} />
        {/* Route for the HomePage */}
        <Route
          path="/home"
          element={
            <>
              {/* <Hero /> */}
              <Features />
              {/* <Testimonial />
              <CallToAction /> */}
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
