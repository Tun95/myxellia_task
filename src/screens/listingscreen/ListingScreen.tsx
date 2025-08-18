import Menubar from "@/common/menubar/Menubar";
import React from "react";

function ListingScreen() {
  return (
    <div className="listing_screen">
      <div className="listing_content">
        <div className="menu">
          <Menubar />
        </div>
      </div>
    </div>
  );
}

export default ListingScreen;
