import {
  IcBaselineKeyboardArrowRight,
  SolarHomeOutline,
} from "@/assets/icons/icon";
import "./styles.scss";
import Link from "next/link";
import { formatNumberCompact } from "@/utilities/Util";

function ListingOverview() {
  return (
    <div className="listing_overview overview_left_boxes">
      <div className="content">
        <div className="top c_flex">
          <div className="left">
            <div className="head_icon a_flex">
              <SolarHomeOutline className="icon" />
              <p>Listings Overview</p>
            </div>
          </div>
          <div className="right">
            <Link href="/listings" className="a_flex">
              <p>View All</p>
              <IcBaselineKeyboardArrowRight className="icon" />
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="aggreations d_grid_3">
            <div className="left f_flex">
              <p>Total</p>
              <h2>{formatNumberCompact(1800)}</h2>
            </div>{" "}
            <div className="middle f_flex">
              <p>Active</p>
              <h2>{formatNumberCompact(80)}</h2>
            </div>{" "}
            <div className="right f_flex">
              <p>Archived</p>
              <h2>{formatNumberCompact(1000)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingOverview;
