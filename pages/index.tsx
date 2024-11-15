import React from 'react';
import AboutComponent from '../components/AboutComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';
import ProjectPreviewComponent from "../components/ProjectPreviewComponent";

const IndexPage = () => (
  <>
    <div className="App">
      <NavigationBar />
    </div>
    <section className="home">
      <WelcomeComponent />
      <AboutComponent />
        <ProjectPreviewComponent />
    </section>
  </>
);

export default IndexPage;
