import "./footer.css";
import pizzaSvg from "../../../public/pizza.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <p className="textReservations">Reservations and telephone orders</p>
        <div className="phoneBox">
          <p className="phoneNumber">699.335.4887-699.335.4886</p>
        </div>
      </div>
      <div className="down-part">
        <img className="pizzaIcon" src={pizzaSvg} alt="Pizza Icon" />
      </div>
    </div>
  );
};

export default Footer;
