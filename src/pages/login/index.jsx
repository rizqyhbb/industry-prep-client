import { Card, Button } from "../../components";

const LoginPage = () => {
  return (
    <div className="login">
      <Card className="login__card" title="Login">
        <p>email</p>
        <p>password</p>
        <Button>Login</Button>
      </Card>      
    </div>
  )
}

export default LoginPage;