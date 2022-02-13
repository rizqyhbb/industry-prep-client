const Delete = (props) => {
  return (
    <button className="delete-button bg-peach-dark" onClick={props.onClick}>
      <img className="delete-button__img" src="cross.png" alt="cross" />
    </button>
  )
}

export default Delete;