import TransitionLight from "../TransitionLight/TransitionLight";

import { useEffect } from "react";

import Aos from "aos";

import "./About.css";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <section id="about" className="about">

            <div data-aos="fade-right" className="about-main-text">

                <h2 className="about-header">About Me</h2>

                <p className="about-paragraph">
                Hi! My name is Usman Zaheer and I am a Third-Year Software Engineering
                Student attending the University of Guelph.
                This summer I finished as a backend and desktop application developer at Tiger Cat Industries. 
                I am very interested in backend development, Infrastructure/Application Design, and Network/Security. 
                As well, Artificial Intelligence/Machine Learning, IoT Devices, and finally Automated Embedded Systems.
                </p>

                <br />

            </div>

            <TransitionLight/>
        </section>
    );
}

export default About;
