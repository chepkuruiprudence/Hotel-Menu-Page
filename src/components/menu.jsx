// import { FaShoppingCart } from "react-icons/fa";
import menudata from "../data/menudata";
import { MdStarRate } from "react-icons/md";

function Menu({ image, title, cost, discount, description }) {
  return (
    <div className="container">
    <div className="listItem">
      <div className="listImg">
        <img src={image} />
        <button className="rateBtn"><MdStarRate /></button>
      </div>
      <div className="listDetails">
        <h3 className="listTitle">{title}</h3>
        <p>
          {description}
        </p>
        <div className="listPricesCart">
          <h4 className="listPrices">
            {discount > 0 && (
              <span className="listCostDiscount">
              ${Math.ceil((cost * (100 - discount) / 100))}
            </span>
            
            )}
            <span className={discount > 0 ? "listCost" : "listCostDiscount"}>
              ${cost}
            </span>
          </h4>
          {/* <button className="listBtn">
            {" "}
            <FaShoppingCart />
          </button> */}
        </div>
      </div>
    </div>
    </div>
  );
}

function MenuList() {
  return (
    <section className="container">
      {menudata.map((menu, idx) => {
        return (
          <Menu
            key={idx}
            image={menu.image}
            title={menu.title}
            cost={menu.cost}
            discount={menu.discount}
            description = {menu.description}
          />
        );
      })}
    </section>
  );
}

export default MenuList;
