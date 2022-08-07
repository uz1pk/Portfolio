import { FaGithub } from "react-icons/fa";
import TransitionDark from "../../TransitionDark/TransitionDark";
import svgApp from "./svgApp.png"
import "../Projects.css"


function Project1() {
    return (
        <article className="project light-theme">

            <div className="main-proj-section">

                <img
                    className="proj-image"
                    src={svgApp}
                    alt="SVG app main area"
                    width="50%"
                    height="auto"
                    loading="lazy"
                />

                <div data-aos="fade-left" className="right-orientation-proj">


                    <h3 className="proj-title">SVGShop</h3>


                    <p className="proj-desc proj-body-text">
                        A self hosted SVG image processing/editing web application. 
                        Allows for users to do SVG uploading, viewing, editing and saving,
                        which is completely self hosted with file caching done privately.
                        Allowing for overall private, easy, and fast user experience.
                    </p>

                    <br/>

                    <p className="proj-tech-stack proj-body-text">
                        <b>
                        C · Express · Node.js · JavaScript · HTML/CSS
                        </b>
                    </p>

                    <a
                        className="proj-source-light"
                        href="https://github.com/uz1pk/SVGShop"
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