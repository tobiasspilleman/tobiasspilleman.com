import React from 'react';
import AboutComponent from '../components/AboutComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';
import ProjectPreviewComponent from "../components/ProjectPreviewComponent";
import Button from "../components/button";
import { getProjects } from "../services/getProjects";

const IndexPage = () => {
  const projects = getProjects().slice(0, 5);

  return (
    <>
      <div className="App">
        <NavigationBar />
      </div>
      <section className="home">
        <WelcomeComponent />
        <h2 className="text-center text-5xl font-bold my-10">Projects</h2>
        <div className="flex flex-row flex-wrap justify-between mx-[15%] gap-5 mb-5">
          {projects.map((project, index) => (
            <div className="flex-1 min-w-[30%] max-w-[30%]" key={index}>
              <ProjectPreviewComponent project={project} />
            </div>
          ))}
          {projects.length < 6 && Array.from({ length: 6 - projects.length }).map((_, i) => (
            <div className="flex-1 min-w-[30%] max-w-[30%]" key={`empty-${i}`}>
              <ProjectPreviewComponent />
            </div>
          ))}
        </div>
        <div className="mx-[15%] my-5">
            <Button text="All projects" callBackFunction={() => { window.location.href = "https://www.tobiasspilleman.com/projects"; }} />        </div>
      </section>
    </>
  );
};

export default IndexPage;