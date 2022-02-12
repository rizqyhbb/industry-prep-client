import { Card, Button, Input } from "../../components";
import { Link, useHistory } from "react-router-dom";
import ROUTES from "../../routes";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  
  useEffect(() => {
    if(email && password){
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password])

  const login = async(e) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      const user = {email, password}
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, user)
      window.localStorage.setItem('token', response.data)
      setIsLoading(false)
      history.push(ROUTES.TASK)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <div className="login bg-peach-dark">
      <Card className="login__card" title="Login">
        <form onSubmit={login}>
          <div className="login__card-input">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login__card-button">
            <Button onClick={login} disabled={isDisabled}>
              { isLoading ? "Loading ..." : "Login"}
            </Button>
          </div>
        </form>
        <p>Or you can <Link to={ROUTES.REGISTER}>Register here</Link></p>
      </Card>      
    </div>
  )
}

export default LoginPage;