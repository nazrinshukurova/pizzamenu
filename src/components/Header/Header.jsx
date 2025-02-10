import "./header.css";
import pizzaBg from "../../assets/pizza-bg.jpg";

const Header = () => {
  return (
    <>
      <div className="pizzaBox" style={{ backgroundImage: `url(${pizzaBg})` }}>
        <h1 className="pizza-menu-text">Pizza Menu</h1>
      </div>
    </>
  );
};

export default Header;
