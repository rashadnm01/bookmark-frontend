import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Index from "./pages/index";
import Show from "./pages/show";
import Update from "./pages/update";
import Delete from "./pages/dalete";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://express-react-hw-api.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/projects" element={<Show URL={URL} />} />
        <Route exact path="/about" element={<Update URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
