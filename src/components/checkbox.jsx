const Checkbox = ({onChange, id, checked}) => {
  return (
    <div className="checkbox">
      <input className="checkbox__input" id={id} type="checkbox" onChange={onChange} checked={checked}/>
      <div className="checkbox__label-container">
        <label className="checkbox__label" htmlFor={id}>
          {checked && <img className="checkbox__img" src="check.png" alt="checked" />}
        </label>
      </div>
    </div>
  )
}

export default Checkbox;