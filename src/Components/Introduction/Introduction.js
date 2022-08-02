import TransitionDark from "../TransitionDark/TransitionDark";
import "./Introduction.css";

function Introduction() {
  return (
    <section id="introduction" className="introduction">

      <div className="top-intro-section">
        <span className="top-intro-name-start">Welcome, my name is</span>
        <h1 className="intro-text">Usman Zaheer</h1>
      </div>

      <hr className="intro-line-split" />

      <div>
        <h1 className="intro-text">Software Engineering Student at</h1>
        <h1 className="intro-text">University of Guelph</h1>
      </div>

      <TransitionDark/>
    </section>
  );
}

export default Introduction;