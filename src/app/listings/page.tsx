import Navbar from "@/common/navbar/Navbar";
import "./styles.scss";
import Menubar from "@/common/menubar/Menubar";

function page() {
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

export default page;
