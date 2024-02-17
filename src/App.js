
// import React from 'react'
// import "./App.css"
// import Navbar from './Components/Navbar/Navbar'
// import Intro from './Components/Intro/Intro'
// import Services from './Components/Service/Services'
// import Experience from './Components/Experience/Experience'
// import Works from './Components/Work/Works'
// import Portfolio from './Components/Portfolio/Portfolio'
// import Testimonial from './Components/Testimonial/Testimonial'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'
// import { themeContext } from './Context'
// import {useContext} from 'react'
// const App = () => {
//   const theme =useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className='App'
//     style={{
//       background: darkMode? 'black' : "",
//       color : darkMode? 'white': '',
//     }}
//     >
//       <Navbar/>
//       <Intro/>
//       <Services/>
//       <Experience/>
//       <Works/>
//       <Portfolio/>
//       <Testimonial/>
//       <Contact/>
//       <Footer/>
//     </div>
//   )
// }

// export default App












import React from 'react'
import "./App.css"
import Navbar from './component/Navbar/Navbar';
import  {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/pages/Home';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
//import DestinationHome from './component/Homesection/Destina/DestinationHome';
import Destination from './component/Destination/Home';

import Blog from './component/Blog/Blog';
import BlogSingle from './component/Blog/blog-single-page/BlogSingle';
import Contact from './component/Contact/Contact';

import Feature from './component/About-Feature/Feature';
import Single from './component/Single/Single';
import Details from './component/About-Feature/Details';
import Login from './component/Signin/up/Login';
import SignUp from './component/Signin/up/SignUp';



const App = () => {
  return (
    <>

  

<Router>
<Navbar/>
    
<Switch>

<Route path='/' exact component={Home} ></Route>
<Route path='/about'  exact component={About}></Route>
<Route path='/Features'  exact component={Feature}></Route>
<Route path='/details'  exact component={Details}></Route>
<Route path='/gallery' exact component={Gallery}></Route>
<Route path='/destination' exact component={Destination}></Route>

<Route path='/single' exact component={Single}></Route>

<Route path='/blog' exact component={Blog}></Route>
<Route path='/blogSingle' exact component={BlogSingle}></Route>
<Route path='/contact' exact component={Contact}></Route>
<Route path='/login' exact component={Login}></Route>
<Route path='/signup' exact component={SignUp}></Route>
</Switch>
</Router>

    
    </>
  )
}

export default App
