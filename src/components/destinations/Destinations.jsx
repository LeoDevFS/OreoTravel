import SectionTitle from "../title/SectionTitle";
import { destinations } from "../../Data";
import { RiTelegram2Fill } from "react-icons/ri";
import ScrollLink from "../links/ScrollLink";
import "./destinations.css";

function Destinations() {
  return (
    <section className="destinations section container">
      <SectionTitle
        subtitle="Top Destination"
        title="Legendary Places"
        description="orem ipsum dolor sit amet consectetur, adipisicing elit.
        Magnam laborum facilis mollitia reiciendis explicabo perferendis laudantium"
      />

      <div className="destinations-container">
        {destinations.map(({ id, img, title, price, rating }) => {
          return (
            <div className="destinations-item" key={id}>
              <img src={img} alt="" className="destinations-img" />

              <div className="destination-details">
                <div className="destination-top">
                  <span className="destination-price">{price}</span>
                  <span className="destination-rating">{rating}</span>
                </div>
                <h3 className="destination-title">{title}</h3>
                <ScrollLink
                  to="/"
                  name="Details"
                  className="button button-white"
                >
                  <RiTelegram2Fill className="button-icon" />
                </ScrollLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Destinations;
