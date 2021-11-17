import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main'
import Work from '../src/Main/Works'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout'
import About from './pages/About/About';
import Impressum from '../src/Footer/Impressum'
import InProgress from '../src/pages/In-Progress/InProgress'
import PrivacyPolicy from '../src/Footer/Privacy-Policy'
import Contact from '../src/pages/Contect-us/Contact'
import Journey from './pages/Work/The-Journey-to-Darkness';
import Annime from './pages/Work/Annie-&-Manny';
import MyDream from './pages/Work/MyDream';
import Tree from './pages/Work/The-Tree-and-The-Bird';
import Golnar from './pages/Work/golnar';
import LovelyCity from './pages/Work/Lovely-city';
import Services from '../src/Main/Services'
import ScrollToTop from './Scroll';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/Header' >
            <Header />
          </Route>
          <Route exact path='/Footer'  >
            <Footer />
          </Route>
          <Route exact path='/Work' >
            <Work />
          </Route>
          <Route exact path='/About' >
            <About />
          </Route>
          <Route exact path='/Impressum' >
            <Impressum />
          </Route>
          <Route exact path='/PrivacyPolicy' >
            <PrivacyPolicy />
          </Route>
          <Route exact path='/InProgress' >
            <InProgress />
          </Route>
          <Route exact path='/Contact' >
            <Contact />
          </Route>
          <Route exact path='/Journey'>
            <Journey />
          </Route>
          <Route exact path='/Annime'>
            <Annime />
          </Route>
          <Route exact path='/MyDream'>
            <MyDream />
          </Route>
          <Route exact path='/Tree'>
            <Tree />
          </Route>
          <Route exact path='/Golnar'>
            <Golnar />
          </Route>
          <Route exact path='/LovelyCity'>
            <LovelyCity />
          </Route>
          <Route exact path='/Services'>
            <Services />
          </Route>

        </Switch>

      </Layout>
    </Router>

  );
}

export default App;
