// COMPONENT
"use client";
import {
  FluentPerson32Regular,
  FluentPerson32Filled,
  IonNewspaperOutline,
  IonNewspaper,
  IcSharpHomeRepairService,
  MaterialSymbolsTextAdOutline,
  MaterialSymbolsTextAd,
  MingcuteHome4Fill,
  SolarMagniferOutline,
  MaterialSymbolsHomeRepairServiceOutlineSharp,
  MingcuteHome4Line,
} from "@/assets/icons/icon";
import "./styles.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menubar() {
  const pathname = usePathname();

  const menuItems = [
    {
      outlineIcon: <MingcuteHome4Line className="menu_icon" />,
      boldIcon: <MingcuteHome4Fill className="menu_icon" />,
      label: "Dashboard",
      path: "/",
    },
    {
      outlineIcon: (
        <MaterialSymbolsHomeRepairServiceOutlineSharp className="menu_icon" />
      ),
      boldIcon: <IcSharpHomeRepairService className="menu_icon" />,
      label: "Listings",
      path: "/listings",
    },
    {
      outlineIcon: <FluentPerson32Regular className="menu_icon" />,
      boldIcon: <FluentPerson32Filled className="menu_icon" />,
      label: "Users",
      path: "/users",
    },
    {
      outlineIcon: <MaterialSymbolsTextAdOutline className="menu_icon" />,
      boldIcon: <MaterialSymbolsTextAd className="menu_icon" />,
      label: "Request",
      path: "/request",
    },
    {
      outlineIcon: <IonNewspaperOutline className="menu_icon" />,
      boldIcon: <IonNewspaper className="menu_icon" />,
      label: "Applications",
      path: "/applications",
    },
  ];

  return (
    <div className="menu_items_bar">
      <div className="container">
        <div className="content">
          <div className="menu_items c_flex">
            {" "}
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  href={item.path}
                  className={`items ${isActive ? "active" : ""} l_flex`}
                  key={index}
                >
                  <div className="icon l_flex">
                    {isActive ? item.boldIcon : item.outlineIcon}
                  </div>
                  <div className="text">{item.label}</div>
                </Link>
              );
            })}
          </div>

          <div className="search_bar">
            <form action="" className="search_box a_flex">
              <SolarMagniferOutline className="icon" />
              <input
                type="search"
                placeholder="Search listings, users here..."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
