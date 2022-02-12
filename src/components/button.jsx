const Button = (props) => {
  return(
  <button className='button text-small bg-aqua-light' onClick={props.onClick} disabled={props.disabled}>
    {props.children}
  </button>
  )
}

export default Button;
