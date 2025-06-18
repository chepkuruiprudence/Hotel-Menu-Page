import { MdNoDrinks } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { TbSalad } from "react-icons/tb";
import { GiCoolSpices } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";

function View() {
  return (
    <button className="viewBtn">
     View All   
    </button>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header_items">
        <ul className="items">
          <li className="all">
            <IoFastFoodSharp /> All
          </li>
          <li>
            <MdNoDrinks /> Drinks
          </li>
          <li>
            <FaPizzaSlice /> Pizza
          </li>
          <li>
            <TbSalad /> Salad
          </li>
          <li>
            <GiCoolSpices /> Spices
          </li>
          <li>
            <LuIceCreamBowl /> Sweets
          </li>
        </ul>
        <View />
      </div>
    </header>
  );
}

export default Header;
// const Navbar = function () {<div>
//  <ul>
//   <div>
//    All
//   </div>
//   <li><IoFastFoodSharp /></li>
//   <li><MdNoDrinks /></li>
//   <li><FaPizzaSlice /></li>
//   <li><TbSalad /></li>
//   <li><GiCoolSpices /></li>
//   <li><LuIceCreamBowl /></li>
//  </ul>
// </div>
// }

// export default Navbar;
