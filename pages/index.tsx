import React from 'react';
import AboutComponent from '../components/AboutComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';
import ProjectPreviewComponent from "../components/ProjectPreviewComponent";
import Button from "../components/button";

const IndexPage = () => (
  <>
    <div className="App">
      <NavigationBar />
    </div>
      <section className="home">
          <WelcomeComponent/>
          <AboutComponent/>
          <h2 className="text-center text-5xl font-bold my-10">Projects</h2>

          <div className="flex flex-row flex-wrap justify-between mx-[15%] gap-5 mb-5">
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between mx-[15%] gap-5">
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
              <div className="flex-1">
                  <ProjectPreviewComponent/>
              </div>
          </div>
          <div className="mx-[15%] my-5">
              <Button text="All projects" callBackFunction={console.log}/>
            </div>
      </section>
  </>
);

export default IndexPage;
