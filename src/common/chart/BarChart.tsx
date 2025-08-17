"use client";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@chakra-ui/react";
import { formatCurrency } from "@/utilities/Util";
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

  const chart = useChart({
    data: chartData,
    series: [
      { name: "productA", color: "blue.500" },
      { name: "productB", color: "green.500" },
      { name: "productC", color: "orange.500" },
    ],
  });

  const formatYAxis = (value: number) => {
    return `${value / 1000000}m`;
  };

  return (
    <Box position="relative" width="100%" right={2}>
      <Chart.Root width="100%" chart={chart} minWidth={550} height={205}>
        <ResponsiveContainer width="100%" minWidth={800} height={100}>
          <BarChart
            data={chart.data}
          >
            <XAxis
              tickLine={false}
              axisLine={false} 
              dataKey={chart.key("month")}
              stroke={chart.color("gray.600")}
            />
            <YAxis
              tickLine={false}
              stroke={chart.color("gray.600")}
              tickFormatter={formatYAxis}
              ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
            />
            <Tooltip
              cursor={{ fill: chart.color("gray.100") }}
              animationDuration={100}
              formatter={(value: number) => [`${formatCurrency(value)}`, ""]}
              labelFormatter={(label) => `Month: ${label}`}
            />

            {chart.series.map((item) => (
              <Bar
                key={item.name}
                dataKey={chart.key(item.name)}
                fill={chart.color(item.color)}
                name={item.name?.replace("product", "Product ")}
                barSize={6} // Reduced from 20 to make bars thinner
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Chart.Root>
    </Box>
  );
};
