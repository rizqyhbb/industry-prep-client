import { Link } from "react-router-dom";
import { Button } from "../../components";
import ROUTES from "../../routes";
const HomePage = () => {
  return(
    <div className="home bg-yellow-light">
      <figure className="home__figure">
        <img className="home__figure-img" src="logo.png" alt="logo" />
        <p className="home__figure-title">noted</p>
        <p className="home__figure-text text-title">level up your note taking</p>
      </figure>
      <Button className="home__button">
        <Link className="home__button-link" to={ROUTES.LOGIN} >Get Started</Link>
      </Button>
    </div>
  )
}

export default HomePage;
