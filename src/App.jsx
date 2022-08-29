import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import useLocalStorage from 'use-local-storage'
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
import RequireAuth from "./components/RequiredAuth";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <JwtContextProvider>
      
      <div className="App" data-theme={theme}>
        <Router>
        <button onClick={switchTheme}>click</button>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<RequireAuth><Pets /></RequireAuth>} />
            <Route path="/pets/:id" element={<RequireAuth><PetDetail /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
