"use client";
import Widget from "@/common/widget/Widget";
import "./styles.scss";
import { BarChartComponent } from "@/common/chart/BarChart";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
  MaterialSymbolsArrowBack2,
  MaterialSymbolsPlayArrow,
} from "@/assets/icons/icon";
import { useRef, useState, useEffect } from "react";

function SalesOverview() {
  const TotalInflow = 120000000;
  const TotalMRR = 50000000;
  const TotalRevenue = 200000000;
  const TotalGMV = 100000000;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (container) {
      const checkScroll = () => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      };

      checkScroll();
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const startScrolling = (direction: "left" | "right") => {
    if (scrollIntervalRef.current) return;

    scrollIntervalRef.current = setInterval(() => {
      if (chartContainerRef.current) {
        const scrollAmount = 10; // Adjust this value to change scroll speed
        chartContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }, 50); // Adjust this value to change scroll smoothness
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

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
          <div className="left bar_chart_arrow">
            <div
              className={`arrow_icon_left l_flex ${
                canScrollLeft ? "active" : ""
              }`}
              onMouseDown={() => startScrolling("left")}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <MaterialSymbolsArrowBack2 className="icon" />
            </div>
            <div className="bar_chart" ref={chartContainerRef}>
              <ChakraProvider value={defaultSystem}>
                <BarChartComponent />
              </ChakraProvider>
            </div>
            <div
              className={`arrow_icon_right l_flex ${
                canScrollRight ? "active" : ""
              }`}
              onMouseDown={() => startScrolling("right")}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <MaterialSymbolsPlayArrow className="icon" />
            </div>
          </div>
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
