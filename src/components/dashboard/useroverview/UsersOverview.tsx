import { formatNumberCompact, formatNumberCompactIntl } from "@/utilities/Util";
import "./styles.scss";
import {
  FluentPerson32Regular,
  IcBaselineKeyboardArrowRight,
} from "@/assets/icons/icon";
import Link from "next/link";

function UsersOverview() {
  return (
    <div className="users_overview overview_left_boxes">
      <div className="content">
        <div className="top c_flex">
          <div className="left">
            <div className="head_icon a_flex">
              <FluentPerson32Regular className="icon" />
              <p>Users Overview</p>
            </div>
          </div>
          <div className="right">
            <Link href="/users" className="a_flex">
              <p>View All</p>
              <IcBaselineKeyboardArrowRight className="icon" />
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="aggreations d_grid_3">
            <div className="left f_flex">
              <p>Total</p>
              <h2>{formatNumberCompact(20700)}</h2>
            </div>{" "}
            <div className="middle f_flex">
              <p>Riders</p>
              <h2>{formatNumberCompact(8500)}</h2>
            </div>{" "}
            <div className="right f_flex">
              <p>Subscribers</p>
              <h2>{formatNumberCompact(7500)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersOverview;
