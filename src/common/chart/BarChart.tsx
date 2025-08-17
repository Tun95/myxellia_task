import { Chart, useChart } from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useState, useRef } from "react";
import "./styles.scss";

// Generate sample data for all months
const generateData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month) => ({
    month,
    productA: Math.floor(Math.random() * 50) * 1000000,
    productB: Math.floor(Math.random() * 50) * 1000000,
    productC: Math.floor(Math.random() * 50) * 1000000,
  }));
};

export const BarChartComponent = () => {
  const chartData = generateData();
  const chartRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (chartRef.current) {
      chartRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (chartRef.current) {
      chartRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const formatYAxis = (value: number) => {
    return `${value / 1000000}m`;
  };

  // Define colors manually
  const colors = {
    productA: "#3182CE", // blue
    productB: "#38A169", // green
    productC: "#DD6B20", // orange
  };

  return (
    <div className="chart_container">
      <div className="scroll_buttons left" onClick={scrollLeft}>
        &lt;
      </div>

      <div className="chart_wrapper" ref={chartRef}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          width={Math.max(800, chartData.length * 80)}
        >
          <CartesianGrid stroke="#E2E8F0" vertical={false} />
          <XAxis tickLine={false} dataKey="month" stroke="#718096" />
          <YAxis
            tickLine={false}
            stroke="#718096"
            tickFormatter={formatYAxis}
            ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
          />
          <Tooltip
            cursor={{ fill: "#EDF2F7" }}
            animationDuration={100}
            formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: 20 }}
          />
          <Bar
            dataKey="productA"
            fill={colors.productA}
            name="Product A"
            barSize={20}
          />
          <Bar
            dataKey="productB"
            fill={colors.productB}
            name="Product B"
            barSize={20}
          />
          <Bar
            dataKey="productC"
            fill={colors.productC}
            name="Product C"
            barSize={20}
          />
        </BarChart>
      </div>

      <div className="scroll_buttons right" onClick={scrollRight}>
        &gt;
      </div>
    </div>
  );
};
