const Input = (props) => {
  return (
    <input className="input text-small" type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
  )
}

export default Input;
