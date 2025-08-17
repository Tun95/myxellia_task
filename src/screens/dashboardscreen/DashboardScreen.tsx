import Navbar from "@/common/navbar/Navbar";
import "./styles.scss";
import Menubar from "@/common/menubar/Menubar";
import SalesOverview from "@/components/dashboard/salesoverview/SalesOverview";
import ListingOverview from "@/components/dashboard/listingoverview/ListingOverview";
import UsersOverview from "@/components/dashboard/useroverview/UsersOverview";
import SliderBox from "@/common/slider/SliderBox";

function DashboardScreen() {
  return (
    <div className="dashboard_screen">
      <div className="dashboard_content">
        <div className="nav">
          <Navbar />
        </div>
        <div className="menu">
          <Menubar />
        </div>
        <div className="container">
          {" "}
          <div className="overviews">
            <div className="head mt-10">
              <h3>Welcome, Ahmed</h3>
            </div>
            <div className="overview_contents mt-20">
              <div className="sales_overview">
                <SalesOverview />
              </div>
              <div className="listings_users_overview f_flex">
                <div className="listings_overview">
                  <ListingOverview />
                </div>
                <div className="users_overview">
                  <UsersOverview />
                </div>
              </div>
            </div>
          </div>
          <div className="slider_section">
            <div className="most_clicked">
              <SliderBox />
            </div>
            <div className="most_clicked">
              <SliderBox />
            </div>
            <div className="most_clicked">
              <SliderBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
