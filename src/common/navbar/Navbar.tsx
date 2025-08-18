"use client";
import "./styles.scss";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { SolarBellBold, SolarChatDotsBold } from "@/assets/icons/icon";
import Link from "next/link";
import DateDropdown from "@/components/date/DateDropdown";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import BudgetDropdown from "@/components/budget/Budget";

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
              <SolarBellBold className="icon disabled" />
            </div>
            <div className="icons calc_icon">
              <ChakraProvider value={defaultSystem}>
                <BudgetDropdown />
              </ChakraProvider>
            </div>
            <div className="icons date_icon">
              <ChakraProvider value={defaultSystem}>
                <DateDropdown />
              </ChakraProvider>
            </div>
            <div className="icons l_flex">
              <SolarChatDotsBold className="icon disabled" />
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
