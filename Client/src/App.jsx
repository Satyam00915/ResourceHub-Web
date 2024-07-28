import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const Contact = lazy(() => import("./Pages/Contact"));
import LoadingSpinner from "./components/Random/LoadingSpinner";
import Navbar from "./components/Landing/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
