const Delete = (props) => {
  return (
    <div className="delete-button bg-peach-dark">
      <button className="delete-button__btn" onClick={props.onClick}>
        <img className="delete-button__img" src="cross.png" alt="cross" />
      </button>
    </div>
  )
}

export default Delete;