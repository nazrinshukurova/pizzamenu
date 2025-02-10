import "./menu.css";

const Menu = ({ photoUrl, name, price, ingredients }) => {
  return (
    <div className="menu-box">
      <div className="pizzaItems">
        <div className="nameAndPhoto">
          <h2>{name}</h2>
          <img src={photoUrl} alt="pizza-image" />
          <div className="priceBox">
            <div className="smallBox">
              <h2>Small</h2>${price.small}
            </div>
            <div className="mediumBox">
              <h2>Medium</h2>${price.medium}
            </div>
            <div>
              <h2>Large</h2>${price.large}
            </div>
          </div>
        </div>
        <p className="ingredientsBox">{ingredients.join(", ")}</p>
      </div>
    </div>
  );
};

export default Menu;
