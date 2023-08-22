import { Project, ProjectProps } from "./Project";
import chatExample from "./images/ChatExample.png"
import apiImg from "./images/apiImg.png"
import shrinkly from "./images/shrinkly.png"
import TransitionDark from "../TransitionDark/TransitionDark";

const projects: ReadonlyArray<ProjectProps> = [
  // Project 1
  {
    projectTitle: "Computing Chat",
    imageData: {
      source: chatExample,
      alt: "Computing Chat Chat Room Example",
    },
    techStack: "Flask · PostgreSQL · Heroku · JavaScript",
    githubRepoLink: "https://github.com/uz1pk/Computing-Chat",
  },

  // Project 2
  {
    projectTitle: "Social Media Infrastructure API",
    imageData: {
      source: apiImg,
      alt: "Social Media Infrastructure API",
    },
    techStack: ".NET 6 · C# · Azure · Docker · Azure SQL Server · JavaScript",
    githubRepoLink: "https://github.com/uz1pk/Social-Media-Post-API",
  },

  // Project 3
  {
    projectTitle: "Shrinkly",
    imageData: {
      source: shrinkly,
      alt: "Shrinkly Example",
    },
    techStack: "Golang · React · Sass · Docker",
    githubRepoLink: "https://github.com/uz1pk/Shrinkly",
  },
];

export function ProjectsSection() {
  return (
    <article className="light-theme">
      <section id="projects" className="project-container project" >
        {
          projects.map((project, idx) => {
            return <Project key={idx} {...project} />
          })
        }
        <TransitionDark />
      </section>
    </article>
  );
}

