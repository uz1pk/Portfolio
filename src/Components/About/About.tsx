import { useEffect }  from 'react';
import TransitionLight from "../TransitionLight/TransitionLight";
import Aos from "aos";
import myPfp from "./zoomedpfp.jpg";

import "aos/dist/aos.css";
import "./About.css";

function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="about">

            <div data-aos="fade-right" className="about-main-text">

                <h1 className="about-header">About Me</h1>

                <h1 className="about-paragraph">
                    Hi! My name is Usman Zaheer and I am a Third-Year Software Engineering
                    Student attending the University of Guelph.
                    This summer I interned at Tiger Cat Industries as a Backend and Desktop Application Developer. 
                    I am interested in Backend Development, Infrastructure/Application Design, and Network/Security. 
                    As well as, Artificial Intelligence/Machine Learning, IoT Devices, and finally Automated Embedded Systems.
                </h1>

                <br />


            </div>

            <img
                className="profile-picture"
                src={myPfp}
                alt="Usman Profle"
                width="400"
                height="400"
            />
            <TransitionLight/>
        </section>
    );
}

export default About;
