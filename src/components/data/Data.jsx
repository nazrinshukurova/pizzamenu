import Menu from "../Menu/Menu";
import "./data.css";
import pizza1 from "../../assets/pizza-images/pizza-1.png";
import pizza2 from "../../assets/pizza-images/pizza-2.png";
import pizza3 from "../../assets/pizza-images/pizza-3.png";
import pizza4 from "../../assets/pizza-images/pizza-4.png";
import pizza5 from "../../assets/pizza-images/pizza-5.png";
import pizza6 from "../../assets/pizza-images/pizza-6.png";
import pizza7 from "../../assets/pizza-images/pizza-7.png";
import pizza8 from "../../assets/pizza-images/pizza-8.png";
import pizza9 from "../../assets/pizza-images/pizza-9.png";
import pizza10 from "../../assets/pizza-images/pizza-10.png";
const Data = () => {
  const pizzaData = [
    {
      name: "Classic",
      photoUrl: pizza1,
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
      photoUrl: pizza2,
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
      photoUrl: pizza3,
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
      photoUrl: pizza4,
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
      photoUrl: pizza5,
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
      photoUrl: pizza6,
      price: { small: 9.49, medium: 12.49, large: 15.49 },
      ingredients: ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"],
      isLeft: false,
    },
    {
      name: "Spicy Delight",
      photoUrl: pizza7,
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
      photoUrl: pizza8,
      price: { small: 7.99, medium: 10.99, large: 13.99 },
      ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
      isLeft: false,
    },
    {
      name: "Pepperoni",
      photoUrl: pizza9,
      price: { small: 8.99, medium: 11.99, large: 14.99 },
      ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
      isLeft: true,
    },
    {
      name: "Four Cheese",
      photoUrl: pizza10,
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
    <div className="data">
      <div className="left-section">
        {leftPizzas.map((item) => (
          <div key={item.name}>
            <Menu {...item} />
          </div>
        ))}
      </div>
      <div className="vertical"></div>
      <div className="right-section">
        {rightPizzas.map((item) => (
          <div key={item.name}>
            <Menu {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
