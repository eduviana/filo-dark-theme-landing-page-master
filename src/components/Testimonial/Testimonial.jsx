import "./Testimonial.scss";

const Testimonial = ({ testimonial }) => {
  return (
    <article className="testimonial">
      <p className="quote">{testimonial.quote}</p>
      <div className="person">
        <img src={testimonial.profile} alt={testimonial.author} />
        <div className="personInfo">
          <h4 className="author">{testimonial.author}</h4>
          <h5 className="position">{testimonial.position}</h5>
        </div>
      </div>
    </article>
  );
};
export default Testimonial;
