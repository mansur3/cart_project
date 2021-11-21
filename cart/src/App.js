import {Banner} from "./Components/Banner/Banner";
import {Navbar} from "./Components/Navbar/Navbar";
import { Switch, Route} from "react-router-dom";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";
import {FAQ} from "./Components/FAQ/FAQ";
import {About} from "./Components/About/About";
import {Mac} from "./Components/Product/Mac";
import {Ipad} from "./Components/Product/Ipad";
import {Iphone} from "./Components/Product/Iphone";






import './App.css';

function App() {
  return (
    <div>
      <Banner />

    <Navbar />
    <Switch>
    
      
        <Route exact path = "/">
          Homepage
        </Route>
        <Route exact path = "/about">
            <About />
        </Route> 
        <Route exact  path = "/contact">
          <Contact />
        </Route>
        <Route exact path = "/faq">
          <FAQ />
        </Route>
        <Route path = "/mac">
          <Mac />
        </Route>
        <Route path = "/ipad">
          <Ipad />
        </Route><Route path = "/iphone">
          <Iphone />
        </Route>

      </Switch>
      <Footer style = {{marginTop: "50px"}} />
      </div>

     
  );
}

export default App;
