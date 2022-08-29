import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <JwtContextProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/:id" element={<PetDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
