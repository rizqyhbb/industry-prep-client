const Delete = (props) => {
  return (
    <div className="delete-button">
      <button className="delete-button__btn bg-peach-dark" onClick={props.onClick}>
        <img className="delete-button__img" src="cross.png" alt="cross" />
      </button>
    </div>
  )
}

export default Delete;