import { FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";
import "./EndPage.css";

export function EndPage() {
    return (
        <section id="end-page" className="contact">
            <div data-aos="fade-right" className="main-contact-area">

                <h3 className="main-header">
                    Contact Me
                </h3>


                <div className="options-section">
                    <FaLinkedin className="link-icon" size={50} />
                    <a
                        className="contact-main-link"
                        href="https://www.linkedin.com/in/usman-zaheer-pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin Page"
                    >
                        <span className="main-text">Linkedin</span>
                    </a>
                </div>

                <div className="options-section">
                    <FaGithub className="link-icon" size={50} />
                    <a
                        className="contact-main-link"
                        href="https://github.com/uz1pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <span className="main-text">Github</span>
                    </a>
                </div>

                <div className="options-section">
                    <FaMailBulk className="link-icon" size={50} />
                    <a className="contact-main-link" href="mailto: uzaheer@uoguelph.ca">
                        <span className="main-text">uzaheer@uoguelph.ca</span>
                    </a>
                </div>

            </div>

        </section>

    );
}
