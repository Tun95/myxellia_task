import "./styles.scss";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import {
  SolarBellBold,
  SolarCalculatorBold,
  SolarCalendarBold,
  SolarChatDotsBold,
} from "@/assets/icons/icon";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="content c_flex">
          <div className="logo_img">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="nav_icons a_flex">
            <div className="icons l_flex">
              <SolarBellBold className="icon" />
            </div>
            <div className="icons l_flex">
              <SolarCalculatorBold className="icon" />
            </div>
            <div className="icons l_flex">
              <SolarCalendarBold className="icon" />
            </div>
            <div className="icons l_flex">
              <SolarChatDotsBold className="icon" />
            </div>
            <div className="user_name_icon l_flex">
              <span className="">D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
