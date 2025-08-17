"use client";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useRef } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { formatCurrency } from "@/utilities/Util";

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

  const chart = useChart({
    data: chartData,
    series: [
      { name: "productA", color: "blue.500" },
      { name: "productB", color: "green.500" },
      { name: "productC", color: "orange.500" },
    ],
  });

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

  return (
    <Box position="relative" width="100%" >
      <IconButton
        aria-label="Scroll left"
        onClick={scrollLeft}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box
        ref={chartRef}
        overflowX="auto"
        overflowY="hidden"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Chart.Root width="100%" chart={chart}>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chart.data}>
              <CartesianGrid
                stroke={chart.color("gray.200")}
                vertical={false}
              />
              <XAxis
                tickLine={false}
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
                formatter={(value: number) => [
                  `${formatCurrency(value)}`,
                  "",
                ]}
                labelFormatter={(label) => `Month: ${label}`}
              />

              {chart.series.map((item) => (
                <Bar
                  key={item.name}
                  dataKey={chart.key(item.name)}
                  fill={chart.color(item.color)}
                  name={item.name?.replace("product", "Product ")}
                  barSize={20}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </Chart.Root>
      </Box>

      <IconButton
        aria-label="Scroll right"
        onClick={scrollRight}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};
