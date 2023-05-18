import Card from "../Card/Card";
import { cards, testimonials } from "../../data/data";
import stayProductive from "../../assets/images/illustration-stay-productive.png";
import arrow from "../../assets/images/icon-arrow.svg";
import "./Main.scss";
import Testimonial from "../Testimonial/Testimonial";

const Main = () => {
  return (
    <section className="main">
      <div className="cardContainer">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <article className="stayProductive">
        <img
          src={stayProductive}
          alt="tres personas sosteniendo archivos-mensajes"
        />
        <div className="content">
          <h2 className="title">Stay productive, wherever you are</h2>
          <p className="description">
            {" "}
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. <br /> <br />{" "}
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="cta">
            <h3>See how Fylo works</h3>
            <img src={arrow} alt="flecha hacia la derecha" />
          </div>
        </div>
      </article>

      <section className="testimonials">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>
    </section>
  );
};
export default Main;
