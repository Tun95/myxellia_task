import Widget from "@/common/widget/Widget";
import "./styles.scss";

function SalesOverview() {
  const TotalInflow = 120000000;
  const TotalMRR = 50000000;
  const TotalRevenue = 200000000;
  const TotalGMV = 100000000;

  return (
    <div className="sales_overview_component ">
      <div className="content">
        <div className="top d_flex">
          <div className="left">
            <div className="head_text">
              <h4>Sales Overview</h4>
            </div>
            <div className="description_text">
              <p>Showing overview Jan 2022 - Sep 2022</p>
            </div>
          </div>
          <div className="right f_flex">
            <div className="btn">
              <button className="main_btn">View Transactions</button>
            </div>
            <div className="filter_btns a_flex">
              <button className="main_btn">1 Week</button>
              <button className="main_btn">1 Month</button>
              <button className="main_btn active">1 Year</button>
            </div>
          </div>
        </div>
        <div className="bottom d_flex">
          <div className="left">Chart</div>
          <div className="right">
            <div className="widgets d_grid">
              <Widget TotalInflow={TotalInflow} type="inflow" />
              <Widget TotalMRR={TotalMRR} type="mrr" />
              <Widget TotalRevenue={TotalRevenue} type="commission" />
              <Widget TotalGMV={TotalGMV} type="revenue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesOverview;
