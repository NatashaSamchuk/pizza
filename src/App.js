
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
// import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import ServicesContainer from "./Components/Services/ServicesContainer";
// import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import HomeContainer from "./Components/Home/HomeContainer";
import BlogContainer from "./Components/Blog/BlogContainer";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/pizza/" element={<HomeContainer/>}/>
        <Route path="/pizza/home" element={<HomeContainer/>}/>
        <Route path="/pizza/menu/:path" element={<Menu/>}/>
        <Route path="/pizza/services" element={<ServicesContainer/>}/>
        <Route path="/pizza/blog" element={<BlogContainer/>}/>
        <Route path="/pizza/about" element={<About/>}/>
        <Route path="/pizza/contact" element={<Contacts/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
