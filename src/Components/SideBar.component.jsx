import { BsChevronBarContract, BsCalendar } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { RiNewspaperLine, RiSettings5Fill } from "react-icons/ri";
import { HiCash } from "react-icons/hi";
import {
  SideBar as SideBarEle,
  NavItemCollection,
  NavItem,
} from "../Elements/SideBar.elements";

const SideBar = () => {
  return (
    <SideBarEle>
      <NavItem className="mb-4" size="extraLarge" color="light">
        <BsChevronBarContract />
      </NavItem>
      <NavItemCollection className="pt-3 pb-3 mb-5">
        <NavItem className="mb-4" size="extraLarge">
          <TiWeatherPartlySunny />
        </NavItem>
        <NavItem className="mb-4" size="large">
          30 &deg;
        </NavItem>
        <NavItem size="extraSmall">
          Cloudy <br /> weather
        </NavItem>
      </NavItemCollection>
      <NavItem size="extraLarge" className="mb-3">
        <MdDashboard />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <BiFoodMenu />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <RiNewspaperLine />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <RiSettings5Fill />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <HiCash />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <BsCalendar />
      </NavItem>
      <NavItem size="extraLarge" className="mb-3" color="greayed">
        <MdDashboard />
      </NavItem>
    </SideBarEle>
  );
};

export default SideBar;
