import { FaGithub } from "react-icons/fa";
import TransitionDark from "../../TransitionDark/TransitionDark";
import shrinkly from "./shrinkly.png";
import "../Projects.css";


function Project1() {
    return (
        <article className="project light-theme">

            <div className="main-proj-section">

                <img
                    className="proj-image"
                    src={shrinkly}
                    alt="shrinkly main"
                    width="50%"
                    height="auto"
                    loading="lazy"
                />

                <div data-aos="fade-left" className="right-orientation-proj">


                    <h3 className="proj-title">Shrinkly</h3>


                    <p className="proj-desc proj-body-text">
                        A self hosted Tiny URL generation platform. 
                        Architected a Go REST API which supports CRUD, alongside having many search and utility endpoints.
                        React consumes the API and utilizes SCSS to provide for a rich user experience.
                    </p>

                    <br/>

                    <p className="proj-tech-stack proj-body-text">
                        <b>
                        Golang · React · SCSS · Docker
                        </b>
                    </p>

                    <a
                        className="proj-source-light"
                        href="https://github.com/uz1pk/Shrinkly"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="=Website GitHub Repository"
                    >
                        <FaGithub className="proj-git" size={25} />
                        <h3 className="proj-source-text">Repository</h3>
                    </a>


                </div>


            </div>

            <TransitionDark/>

        </article>
    );
}

export default Project1;