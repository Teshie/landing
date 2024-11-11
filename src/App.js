import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";
import SubContent from "./components/SubContent";
import Content from "./components/Content";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const currentTime = new Date().getTime();
  const twoMinutes = 200 * 60 * 1000;

  if (!user || !user.code || currentTime - user.loginTime > twoMinutes) {
    localStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content/:categoryId/" element={<Content />} />
        <Route
          path="/content/subcontent/:contentId/"
          element={<SubContent />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Features />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
