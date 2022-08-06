import { FaGithub } from "react-icons/fa";
import TransitionDark from "../../TransitionDark/TransitionDark";
import chatExample from "./ChatExample.png"
import "../Projects.css"


function Project1() {
    return (
        <article className="project light-theme">

            <div className="main-proj-section">

                <img
                    className="proj-image"
                    src={chatExample}
                    alt="Computing Chat Chat Room Example"
                    width="50%"
                    height="auto"
                    loading="lazy"
                />

                <div data-aos="fade-left" className="right-orientation-proj">


                    <h3 className="proj-title">Computing Chat</h3>


                    <p className="proj-desc proj-body-text">
                        A Flask powered web application which allows for computer science
                        students across the nation to connect to each other. Public hosted
                        chat servers allow for communities of computer science students
                        to come together and talk about their favorite topics all behind
                        a completly secure chat server.
                    </p>

                    <br/>

                    <p className="proj-tech-stack proj-body-text">
                        <b>
                        TechStack&gt; Flask · PostgreSQL · Heroku · HTML/CSS · JavaScript
                        </b>
                    </p>

                    <a
                        className="proj-source-light"
                        href="https://github.com/uz1pk/Computing-Chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="=Website GitHub Repository"
                    >
                        <FaGithub className="proj-git" size={25} />
                        <h3 className="prof-source-text">Repository</h3>
                    </a>


                </div>


            </div>

            <TransitionDark/>

        </article>
    );
}

export default Project1;
