import { useEffect } from 'react';
import TransitionLight from "../TransitionLight/TransitionLight";
import Aos from "aos";
import myPfp from "./zoomedpfp.jpg";

import "aos/dist/aos.css";
import "./About.css";

export function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="about">

            <div data-aos="fade-right" className="about-main-text">

                <h1 className="about-header">About Me</h1>

                <h1 className="about-text">
                    Hi! My name is Usman Zaheer and I am a Fourth Year Software Engineering at the University of Guelph.
                </h1>

                <br />

                <h1 className="about-text">
                    This summer I interned at Palantir as a Software Engineer Intern.
                </h1>

                <br />

                <h1 className="about-text">
                    I'm interested in distributed systems, networking, cloud computing, and backend development.
                </h1>
            </div>

            <img
                className="profile-picture"
                src={myPfp}
                alt="Usman Profile"
                width="400"
                height="400"
            />
            <TransitionLight />
        </section>
    );
}
