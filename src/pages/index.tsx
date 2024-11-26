import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';
import ProjectPreviewComponent from "../components/ProjectPreviewComponent";
import Button from "../components/button";
import { getProjects } from "../services/getProjects";
import {Project} from "../interfaces/Project";
import Head from 'next/head';

const IndexPage = () => {
    const [projects, setProjects] = React.useState<Project[]>([]);

    React.useEffect(() => {
        getProjects().then((data) => setProjects(data.slice(0, 5)));
    }, []);
  // const blogs: Blog[] = getBlogs().slice(0, 5);

  return (
    <>
        <Head>
            <title>Tobias Spilleman - Portfolio</title>
            <link rel="icon" type="image/x-icon" href="/assets/logo-image.png"/>
        </Head>
        <div className="App">
            <NavigationBar/>
        </div>
      <section className="home">
        <WelcomeComponent />
        <h2 className="text-center text-5xl font-bold my-10">Projects</h2>
        <div className="flex flex-row flex-wrap justify-between mx-[5vw] md:mx-[15%] gap-5 mb-5">
          {projects.map((project, index) => (
            <div className="md:flex-1 w-full md:min-w-[30%] md:max-w-[30%]" key={index}>
              <ProjectPreviewComponent project={project} />
            </div>
          ))}
          {projects.length < 6 && Array.from({ length: 6 - projects.length }).map((_, i) => (
            <div className="md:flex-1 w-full sm:min-w-1/2 sm:max-w-1/2 md:min-w-[30%] md:max-w-[30%]" key={`empty-${i}`}>
              <ProjectPreviewComponent />
            </div>
          ))}
        </div>
        <div className="mx-[5vw] sm:mx-[15%] my-5">
            <Button text="All projects" callBackFunction={() => { window.location.href = "/projects"; }} />        </div>
      </section>
<footer className="w-full py-10 flex justify-center align-center text-black bg-gradient-to-b from-transparent to-gray-200">
    <p className="text-center">Made with ♥️ by Tobi</p>
        </footer>
    </>
  );
};

export default IndexPage;