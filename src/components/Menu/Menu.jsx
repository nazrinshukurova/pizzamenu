import "./menu.css";

const Menu = () => {
  const pizzaData = [
    {
      name: "Classic",
      photoUrl: "https://example.com/images/classic.jpg",
      price: { small: 8.99, medium: 11.99, large: 14.99 },
      ingredients: [
        "Mozzarella",
        "Tomato Sauce",
        "Olive Oil",
        "Basil",
        "Oregano",
      ],
      isLeft: true,
    },
    {
      name: "Meat Feast",
      photoUrl: "https://example.com/images/meat-feast.jpg",
      price: { small: 10.99, medium: 13.99, large: 17.99 },
      ingredients: [
        "Beef",
        "Chicken",
        "Sausage",
        "Bacon",
        "Mozzarella",
        "Tomato Sauce",
      ],
      isLeft: false,
    },
    {
      name: "Veggie Supreme",
      photoUrl: "https://example.com/images/veggie-supreme.jpg",
      price: { small: 9.99, medium: 12.99, large: 15.99 },
      ingredients: [
        "Mushrooms",
        "Bell Peppers",
        "Zucchini",
        "Spinach",
        "Mozzarella",
        "Tomato Sauce",
      ],
      isLeft: true,
    },
    {
      name: "Seafood Delight",
      photoUrl: "https://example.com/images/seafood-delight.jpg",
      price: { small: 12.99, medium: 16.99, large: 20.99 },
      ingredients: [
        "Shrimp",
        "Squid",
        "Anchovies",
        "Garlic Sauce",
        "Mozzarella",
      ],
      isLeft: false,
    },
    {
      name: "BBQ Chicken",
      photoUrl: "https://example.com/images/bbq-chicken.jpg",
      price: { small: 11.99, medium: 14.99, large: 18.99 },
      ingredients: [
        "Chicken",
        "BBQ Sauce",
        "Red Onions",
        "Cilantro",
        "Cheddar",
        "Mozzarella",
      ],
      isLeft: true,
    },
    {
      name: "Hawaiian",
      photoUrl: "https://example.com/images/hawaiian.jpg",
      price: { small: 9.49, medium: 12.49, large: 15.49 },
      ingredients: ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"],
      isLeft: false,
    },
    {
      name: "Spicy Delight",
      photoUrl: "https://example.com/images/spicy-delight.jpg",
      price: { small: 10.49, medium: 13.49, large: 16.49 },
      ingredients: [
        "Jalapeños",
        "Chili Sauce",
        "Sausage",
        "Mozzarella",
        "Tomato Sauce",
      ],
      isLeft: true,
    },
    {
      name: "Margherita",
      photoUrl: "https://example.com/images/margherita.jpg",
      price: { small: 7.99, medium: 10.99, large: 13.99 },
      ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
      isLeft: false,
    },
    {
      name: "Pepperoni",
      photoUrl: "https://example.com/images/pepperoni.jpg",
      price: { small: 8.99, medium: 11.99, large: 14.99 },
      ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
      isLeft: true,
    },
    {
      name: "Four Cheese",
      photoUrl: "https://example.com/images/four-cheese.jpg",
      price: { small: 10.99, medium: 13.99, large: 17.99 },
      ingredients: [
        "Mozzarella",
        "Cheddar",
        "Gorgonzola",
        "Parmesan",
        "Tomato Sauce",
      ],
      isLeft: false,
    },
  ];

  const leftPizzas = pizzaData.filter((pizza) => pizza.isLeft);
  const rightPizzas = pizzaData.filter((pizza) => !pizza.isLeft);

  return (
    <div>
      <div className="menu-box">
        <div className="left-side">
          <ul>
            <ul>
              {leftPizzas.map((pizza, index) => (
                <li key={index}>
                  <div className="nameAndPrice">
                    <p className="pizzaName">{pizza.name}</p>
                    <div className="prices">
                      <p>Small: ${pizza.price.small}</p>
                      <p>Medium: ${pizza.price.medium}</p>
                      <p>Large: ${pizza.price.large}</p>
                    </div>
                  </div>
                  <p className="ingredients">Ingredients: {pizza.ingredients.join(", ")}</p>
                </li>
              ))}
            </ul>
          </ul>
        </div>

        <div className="right-side">
          <ul>
            {rightPizzas.map((pizza, index) => (
              <li key={index}>
                <div className="nameAndPrice">
                  <p className="pizzaName">{pizza.name}</p>
                  <div className="prices">
                    <p>Small: ${pizza.price.small}</p>
                    <p>Medium: ${pizza.price.medium}</p>
                    <p>Large: ${pizza.price.large}</p>
                  </div>
                </div>
                <p>Ingredients: {pizza.ingredients.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
