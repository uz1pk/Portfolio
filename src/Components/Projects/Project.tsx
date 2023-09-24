import { FaGithub } from "react-icons/fa";
import "./Projects.css";

export namespace Project {
    export interface ImageMetaData {
        source: string;
        alt: string;
    }

    export interface Props {
        projectTitle: string;
        imageData: ImageMetaData;
        techStack: string;
        githubRepoLink: string;
    }
}

export function Project({
    projectTitle,
    imageData,
    techStack,
    githubRepoLink,
}: Project.Props) {
    return (
        <div className="grid-item">
            <img
                className="proj-image"
                src={imageData.source}
                alt={imageData.alt}
            />

            <div data-aos="fade-left">
                <h3 className="proj-title">{projectTitle}</h3>

                <p>
                    <b>{techStack}</b>
                </p>

                <br />
                <div className="proj-source-light">
                    <a
                        href={githubRepoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="=Website GitHub Repository"
                        className="proj-source-light"
                    >
                        <FaGithub size={25} />
                        <h3>Repository</h3>
                    </a>
                </div>
            </div>

        </div>
    );
};
