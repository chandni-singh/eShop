import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemlineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemlineTwo">Shop</span>
        </div>
        <div className="nav__itemBasket">
          <ShoppingBasketIcon
            className="nav__itemBasket nav__itemLineOne"
            fontSize="large"
          />
          <span className="nav__itemlineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
