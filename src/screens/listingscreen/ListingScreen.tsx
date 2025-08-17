import Menubar from "@/common/menubar/Menubar";
import Navbar from "@/common/navbar/Navbar";
import React from "react";

function ListingScreen() {
  return (
    <div className="listing_screen">
      <div className="listing_content">
        <div className="nav">
          <Navbar />
        </div>
        <div className="menu">
          <Menubar />
        </div>
      </div>
    </div>
  );
}

export default ListingScreen;
