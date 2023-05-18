import "./SignUp.scss";

const SignUp = () => {
  return (
    <article className="signUp">
      <h2 className="title">Get early access today</h2>
      <p className="description">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="buttons">
        <input type="text" placeholder="email@example.com" />
        <button className="cta">Get Started For Free</button>
      </div>
    </article>
  );
};
export default SignUp;
