const Button = (props) => {
  return(
  <button className='button bg-aqua-light' onClick={props.onClick}>
    {props.children}
  </button>
  )
}

export default Button;
