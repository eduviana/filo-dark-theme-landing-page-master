import "./Card.scss";

const Card = ({card}) => {
  
  return (
    <article className="card">
        <img src={card.icon} alt={card.title} />
        <h2 className="title">{card.title}</h2>
        <p className="description">{card.description}</p>
    </article>
  )
}
export default Card