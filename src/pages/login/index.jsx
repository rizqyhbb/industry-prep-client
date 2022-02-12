import { Card, Button, Input } from "../../components";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";

const LoginPage = () => {
  return (
    <div className="login bg-peach-dark">
      <Card className="login__card" title="Login">
        <div className="login__card-input">
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        </div>
        <div className="login__card-button">
        <Button>Login</Button>
        </div>
        <p>Or you can <Link to={ROUTES.REGISTER}>register here</Link></p>
      </Card>      
    </div>
  )
}

export default LoginPage;