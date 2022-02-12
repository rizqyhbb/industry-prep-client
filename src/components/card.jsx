import classNames from "classnames";

const Card = (props) => {
  return(
<div className={classNames('card bg-yellow-dark', props.className)}>
  <p className="card__title text-title">{props.title}</p>
  <hr className="card__hr" />
  {props.children}
</div>
)
}

export default Card;