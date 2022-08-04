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
                        A mobile app built to help manage life. Allows users to
                        manage all of their medications, with an enjoyable
                        calendar view is available for all users so they can view their
                        medication history from the past or look to the future and see what they need to take.
                        Finally, users are also given a map view so that they
                        have no problem finding any nearby pharmacies or hostiptals if
                        needed.
                    </p>

                    <br/>

                    <p className="proj-tech-stack proj-body-text">
                        <b>
                        C:/TechStack&gt; Flask · PostgreSQL · Heroku · HTML/CSS · JavaScript
                        </b>
                    </p>

                    <a
                        className="proj-source"
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
