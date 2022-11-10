import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Card from './components/News/Card'
import Header from './components/Header'
import Footer from "./components/Footer";
import Info from "./components/Info";
import Mainpage from "./components/News/Mainpage";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Search from "./components/News/Search";
import Redaction from "./components/Redaction";
import NotFound from "./components/NotFound";
import Article from './components/News/Article/index';
import CookieWraning from "./components/CookieWarning";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Mainpage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/useragreement" element={<Info type='UserAgreement'/>}></Route>
            <Route path="/privacypolicy" element={<Info type='PrivacyPolicy'/>}></Route>
            <Route path="/sitematerials" element={<Info type='SiteMaterials'/>}></Route>
            <Route path="/cookies" element={<Info type='Cookies'/>}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/redaction" element={<Redaction />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          {localStorage.getItem('spb-news') != '1' && <CookieWraning></CookieWraning>}
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
