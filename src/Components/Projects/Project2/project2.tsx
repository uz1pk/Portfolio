import { FaGithub } from "react-icons/fa";
import TransitionLight from "../../TransitionLight/TransitionLight";
import apisource from "./apiImg.png";
import "../Projects.css";

function project2() {
    return (
        <article className="project dark-theme">
            <div className="main-proj-section">


                <div data-aos="fade-right" className="left-orientation-proj">
                    <h3 className="proj-title proj-title-dark-only">Social Media Infrastructure API</h3>

                    <p className="proj-desc proj-body-text">
                        My REST API is a one shoe fits all solution for any company or individual looking
                        for a secure server to build their solution media platform on top of.
                        This Secure API allows you to create accounts which are token authenticated, 
                        to perform full CRUD operations on user posts while also being able to
                        search and filter existing posts.
                    </p>

                    <br/>

                    <p className="proj-tech-stack proj-body-text proj-tech-stack-dark">
                        <b>
                        .NET 6 · C# · Azure · Docker · Azure SQL Server · JavaScript · HTML/CSS
                        </b>
                    </p>

                    <a
                        className="proj-source-dark"
                        href="https://github.com/uz1pk/Social-Media-Post-API"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="=Website GitHub Repository"
                    >
                        <FaGithub className="proj-git-dark" size={25} />
                        <h3 className="proj-source-text-dark">Repository</h3>
                    </a>


                </div>

                <img
                    className="proj-image dark-image"
                    src={apisource}
                    alt="all API Routes"
                    width="40%"
                    height="auto"
                    loading="lazy"
                />

            </div>

            <TransitionLight/>

        </article>
    );
}

export default project2;
