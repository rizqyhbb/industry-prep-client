import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from ".";
import ROUTES from "../routes";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const logout = async(e) => {
    try {
      e.preventDefault();
      setIsLoading(true)
      window.localStorage.clear()
      setIsLoading(false)
      history.push(ROUTES.ROOT)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <nav className="navbar">
      <figure className="navbar__figure">
        <img className="navbar__figure-img" src="logo.png" alt="logo" />
        <p className="navbar__figure-title text-title">noted</p>
      </figure>
      <Button onClick={logout} >
        {isLoading ? 'Loading...' : 'Logout'}
      </Button>

    </nav>
  )
}

export default Navbar;
