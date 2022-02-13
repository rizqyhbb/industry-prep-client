import classNames from "classnames";

const Input = (props) => {
  return (
    <input className={classNames('input text-small', props.className)} value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
  )
}

export default Input;
