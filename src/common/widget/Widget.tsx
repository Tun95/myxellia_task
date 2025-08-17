import { formatCurrency, formatNumberWithCommas } from "@/utilities/Util";
import "./styles.scss";
import {
  MaterialSymbolsArrowCircleDownRounded,
  MaterialSymbolsArrowCircleUp,
} from "@/assets/icons/icon";

interface WidgetProps {
  type: "inflow" | "mrr" | "commission" | "revenue";
  TotalInflow?: number;
  TotalMRR?: number;
  TotalRevenue?: number;
  TotalGMV?: number;
}

const Widget: React.FC<WidgetProps> = ({
  type,
  TotalInflow = 0,
  TotalMRR = 0,
  TotalRevenue = 0,
  TotalGMV = 0,
}) => {
  let data:
    | {
        title: string;
        isMoney: boolean;
        percentageChange: number;
        isIncrease: boolean;
      }
    | undefined;

  // Determine the amount based on the type prop
  const dataType =
    type === "inflow"
      ? TotalInflow
      : type === "mrr"
      ? TotalMRR
      : type === "commission"
      ? TotalRevenue
      : type === "revenue"
      ? TotalGMV
      : 0;

  // Switch statement to handle different widget types
  switch (type) {
    case "inflow":
      data = {
        title: "Total Inflow",
        isMoney: true,
        percentageChange: 2.5,
        isIncrease: true,
      };
      break;
    case "mrr":
      data = {
        title: "MRR",
        isMoney: true,
        percentageChange: 2.5,
        isIncrease: true,
      };
      break;
    case "commission":
      data = {
        title: "Commission Revenue",
        isMoney: true,
        percentageChange: 0.5,
        isIncrease: true,
      };
      break;
    case "revenue":
      data = {
        title: "GMV",
        isMoney: true,
        percentageChange: -0.6,
        isIncrease: false,
      };
      break;
    default:
      data = undefined;
      break;
  }

  // Get the color based on the widget type
  const getCounterColor = (type: WidgetProps["type"]): string => {
    switch (type) {
      case "inflow":
        return "#4545FE"; // Blue
      case "mrr":
        return "#12B76A"; // Green
      case "commission":
        return "#14B8A6"; // Teal
      case "revenue":
        return "#F04438"; // Red
      default:
        return "#000000"; // Fallback (black)
    }
  };

  const counterColor = getCounterColor(type);

  if (!data) return null; // Handle invalid type

  return (
    <div className="widget">
      <div className="left">
        <div className="counter_percentage a_flex">
          <span
            className="counter"
            style={{ color: counterColor }} // Dynamic color
          >
            {data.isMoney
              ? `${formatCurrency(dataType)}`
              : formatNumberWithCommas(dataType)}
          </span>
          <span className="percentage_section a_flex">
            <div className="title_info">
              <span className="title">{data.title}</span>
            </div>
            <div
              className={`percentage a_flex ${
                data.isIncrease ? "increase" : "decrease"
              }`}
            >
              {data.isIncrease ? (
                <MaterialSymbolsArrowCircleUp className="percentage_icon" />
              ) : (
                <MaterialSymbolsArrowCircleDownRounded className="percentage_icon" />
              )}
              {Math.abs(data.percentageChange)?.toFixed(1)}%
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
