import { Link } from "react-router-dom";
const Header = ({ cart }) => {
  // total cart products quantities
  const totalProductQuantitiesInCart = cart.reduce((acc, initialVal) => {
    return acc + initialVal.quantity;
  }, 0);

  return (
    <>
      <header>
        <Link to="/">
          <img src="" alt="logo" />
        </Link>

        <Link to="/cart">
          <div>
            <img src="" alt="cart" />
            <span>{totalProductQuantitiesInCart}</span>
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
