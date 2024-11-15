import AnimatedGalleryComponent from "./AnimatedGalleryComponent";

const AboutComponent = () => {
    return (
        <div id="about" className="bg-black text-white w-full h-screen px-20">
            <div className="flex h-full">
                <div className="flex flex-col justify-center w-2/5">
                    <h1 className="text-5xl font-bold mb-5">About Me</h1>
                    <p className="text-2xl text-justify mb-5">I'm Tobias from Münster, deeply passionate about web development. From initial design concepts to flawless execution, I specialize in crafting user-centric and visually appealing websites. My focus extends beyond coding; I prioritize blending aesthetics with functionality, always staying updated with the latest web technologies to deliver innovative online experiences.</p>
                    <p className="text-2xl text-justify mb-5">Web Development:
                        HTML  •  CSS  •  JavaScript  •  TypeScript  •  Node.js  •  Express.js  •  React.js  •  Vite •  LIT</p>
                    <p className="text-2xl text-justify mb-5">Software Development
                        Java  •  SpringBoot  •  SQL</p>
                </div>
                <div className="w-3/5">
                    <AnimatedGalleryComponent images={[]}></AnimatedGalleryComponent>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
