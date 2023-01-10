import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const [openNavbar, setOpenNavBar] = useState("");
  const toggleNavbar = () => {
    setOpenNavBar((prev) => (prev === "" ? "show" : ""));
  };

  // For useContext
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <section id="header">
        <Link to="/" id="header__logo">
          DL<span>S.</span>
        </Link>

        <div>
          <ul id="header__navbar" class={openNavbar}>
            <li class="navbar_links">
              <Link to="/" class="active">
                Home
              </Link>
            </li>
            <li class="navbar_links">
              <Link to="/shop">shop</Link>
            </li>
            <li class="navbar_links">
            <Link to="/login">
              {currentUser ? (
                <span onClick={signOutUser}>logout</span>
              ) : (
                <span>login</span> 
              )}
              </Link>
            </li>

            <li class="navbar_links">
              <Link to="">contact</Link>
            </li>
            <li>
              <Link>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <i id="bar" class="fa-solid fa-bars" onClick={toggleNavbar}></i>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Navigation;
