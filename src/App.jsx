import NavBar from "./component/main_navbar/main_nav";
import About from "./component/about/about";
import Footer from "./component/footer/footer";
import Home from "./component/home/home"
import { Route, HashRouter as Router, Routes } from "react-router-dom";
// import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;