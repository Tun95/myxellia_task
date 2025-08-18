// DashboardScreen.tsx
import "./styles.scss";
import Menubar from "@/common/menubar/Menubar";
import SalesOverview from "@/components/dashboard/salesoverview/SalesOverview";
import ListingOverview from "@/components/dashboard/listingoverview/ListingOverview";
import UsersOverview from "@/components/dashboard/useroverview/UsersOverview";
import SliderBox from "@/common/slider/SliderBox";
import { sliderData2Items, sliderData3Items, sliderData5Items } from "@/data/data";

function DashboardScreen() {
  return (
    <div className="dashboard_screen">
      <div className="dashboard_content">
        <div className="menu">
          <Menubar />
        </div>
        <div className="container">
          {" "}
          <div className="overviews">
            <div className="head mt-10">
              <h3>Welcome, Ahmed</h3>
            </div>
            <div className="overview_contents">
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
            <div className="slider_blocks">
              <SliderBox data={sliderData2Items} />
              <p className="main_title">Most Clicked</p>
            </div>
            <div className="slider_blocks">
              <SliderBox data={sliderData3Items} />
              <p className="main_title">Most Watchlisted</p>
            </div>
            <div className="slider_blocks">
              <SliderBox data={sliderData5Items} />
              <p className="main_title">Hottest Listing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
