import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input, Card, Button } from "../../components";
import toast, { Toaster } from 'react-hot-toast';
import ROUTES from "../../routes";

const RegisterPage = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if(username && email && password && retypePassword){
      setIsDisabled(false)
    } else {
      setIsDisabled(true);
    }
  },[username, email, password, retypePassword])

  const notify = (str) => toast(str);

  const register = async(e) => {
    try {
      e.preventDefault()
      setIsLoading(true)
      const user = {username, email, password, retypePassword}
      if (password === retypePassword) {
        const request = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, user)
        notify(request.data.message)
        setIsLoading(false)
        history.push(ROUTES.LOGIN)
      } else {
        notify("Retype your password correctly")
        setIsLoading(false)
        setPassword('')
        setRetypePassword('')
      }
    } catch (err) {
      setIsLoading(false)
      notify(err.response.data.message)
    }
  }

  return (
    <div className="register bg-peach-dark">
      <Toaster toastOptions={{
        className: "toast text-l",
        duration: 2_000
      }}/>
      <Card className="register__card" title="Register">
        <form onSubmit={register}>
          <div className="register__card-input">
          <Input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password" 
            placeholder="Re-type password" 
            value={retypePassword} 
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          </div>
          <div className="register__card-button">
          <Button onCLick={register} disabled={isDisabled}>
            {isLoading ? "Loading..." : "Register"}
            </Button>
          </div>
        </form>
        <p>Or you can <Link to={ROUTES.LOGIN}>Login here</Link></p>
      </Card>      
    </div>
  )
}

export default RegisterPage;