import React from 'react';
import AboutComponent from '../components/AboutComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';

const IndexPage = () => (
  <>
    <div className="App">
      <NavigationBar />
    </div>
    <section className="home">
      <WelcomeComponent />
      <AboutComponent />
    </section>
  </>
);

export default IndexPage;
