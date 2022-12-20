import NavBar from "./component/main_navbar/main_nav";
import About from "./component/about/about";
// import Footer from "./component/footer/footer";
import Home from "./component/home/home"
import MentorLogin from "./component/mentor_login/mentor_login"
import MentorSignup from "./component/mentor_signup/mentor_signup";
import MentorCreateProfile from "./component/mentor_create-profile/mentor_create-profile";
import MentorSuccess from "./component/mentor_success_signup/mentor_success";
import MentorRequest from "./component/mentor_request/mentor_request";
import MentorRequestDetail from "./component/mentor_request_detail/mentor_request_detail";
import MentorApprove from "./component/mentor_approve_request/mentor_approve";
import MentorHome from "./component/mentor_home/mentor_home";
import Resource from "./component/resource/resource";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

// import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <>
     {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/about" exact element={<About />} />
          <Route path="/mentor/login" exact element={<MentorLogin />} />
          <Route path="/mentor/signup" exact element={<MentorSignup />} />
          <Route path="/mentor/create-profile" exact element={<MentorCreateProfile />} />
          <Route path="/mentor/loged" exact element={<MentorSuccess />} />
          <Route path="/mentor/loged/request" exact element={<MentorRequest />} />
          <Route path="/mentor/loged/request-detail" exact element={<MentorRequestDetail />} />
          <Route path="/mentor/loged/approve" exact element={<MentorApprove />} />
          <Route path="/mentor" exact element={<MentorHome />} />
          <Route path="/mentor" exact element={<MentorHome />} />
          <Route path="/resource" exact element={<Resource />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
