import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the LoginPage */}
        <Route path="/" element={<LoginPage />} />

        {/* Route for the HomePage */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <Testimonial />
              <CallToAction />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
