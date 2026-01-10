import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useUserContext } from "./components/User/State/UserContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MainHeader from "./components/User/MainHeader";
import MainFooter from "./components/User/MainFooter";

import Login from "./components/User/Pages/Login";
import Register from "./components/User/Pages/Register";
import "./App.css";

// ✅ PROTECTED PAGES
import AllUsers from "./components/User/Pages/AllUsers";
import ProfileUpdate from "./components/User/Pages/ProfileUpdate";
import ProfilePreview from "./components/User/Pages/ProfilePreview";
import Gallery from "./components/User/Pages/Gallery";
import ChangePassword from "./components/User/Pages/ChangePassword";

import ProtectedRoute from "./components/User/Route/ProtectedRoute";
import MainLanding, { LoginPageWrapper } from "./components/User/MainLanding";

// ✅ ✅ SINGLE PAGE SCROLL CONTAINER


const AppLayout = () => {
  const { currentUser } = useUserContext();
  const location = useLocation();

  return (
    <>
      {/* ✅ HEADER SWITCHING */}
      {!currentUser ? <MainHeader /> : <Header />}

      <Routes>
        {/* ✅ ✅ PUBLIC SCROLL ROUTES (ALL LOAD SAME PAGE) */}
        <Route
          path="/"
          element={currentUser ? <Navigate to="/dashboard" replace /> : <MainLanding />}
        />

        <Route path="/about" element={<MainLanding />} />
        <Route path="/story" element={<MainLanding />} />
        <Route path="/testimonial" element={<MainLanding />} />
        <Route path="/maingallery" element={<MainLanding />} />
        <Route path="/contact" element={<MainLanding />} />

        {/* ✅ AUTH ROUTES */}
        <Route path="/login" element={<LoginPageWrapper><Login /></LoginPageWrapper>} />
<Route path="/register" element={<LoginPageWrapper><Register /></LoginPageWrapper>} />


        {/* ✅ PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AllUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile-update"
          element={
            <ProtectedRoute>
              <ProfileUpdate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile-preview"
          element={
            <ProtectedRoute>
              <ProfilePreview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ FOOTER SWITCHING */}
      {!currentUser ? <MainFooter /> : <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
