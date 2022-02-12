const Input = (props) => {
  return (
    <input className="input text-small" value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
  )
}

export default Input;
