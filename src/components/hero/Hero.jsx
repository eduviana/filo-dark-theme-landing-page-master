import illustrationIntro from "../../assets/images/illustration-intro.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
      <div className="illustration">
        <img
          src={illustrationIntro}
          alt="ilustración de una notebook con dos personas trabajando con archivos"
        />
      </div>

      <h1 className="title">All your files in one secure location, accessible anywhere.</h1>
      <p className="paragraph">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="cta">Get Started</button>
    </header>
  );
};
export default Hero;
