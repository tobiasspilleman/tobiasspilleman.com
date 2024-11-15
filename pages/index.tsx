import React from 'react';
import AboutComponent from '../components/AboutComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import NavigationBar from '../components/NavigationBar';
import ProjectPreviewComponent from "../components/ProjectPreviewComponent";
import Button from "../components/button";
import { getProjects } from "../services/getProjects";
import {Project} from "../interfaces/Project";
import {Blog} from "../interfaces/Blog";
import {getBlogs} from "../services/getBlogEntries";
import BlogPreview from "../components/BlogPreview";

const IndexPage = () => {
  const projects: Project[] = getProjects().slice(0, 5);
    const blogs: Blog[] = getBlogs().slice(0, 5);

  return (
    <>
      <div className="App">
        <NavigationBar />
      </div>
      <section className="home">
        <WelcomeComponent />
          <h2 className=" text-center text-5xl font-bold my-10">Blog</h2>
            <div className="flex flex-col mx-[15%]">
                {blogs.map((blog, index) => (
                        <BlogPreview blogEntry={blog} />
                ))}
            </div>
            <div className="mx-[15%] mt-5 mb-24">
                <Button text="All blogs" callBackFunction={() => { window.location.href = "https://www.tobiasspilleman.com/blogs"; }} />        </div>
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
            <Button text="All projects" callBackFunction={() => { window.location.href = "/projects"; }} />        </div>
      </section>
<footer className="w-full py-10 flex justify-center align-center text-black bg-gradient-to-b from-transparent to-gray-200">
    <p className="text-center">Made with ♥️ in Germany</p>
        </footer>
    </>
  );
};

export default IndexPage;