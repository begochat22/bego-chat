import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, CartesianGrid, Area, XAxis, BarChart, Bar } from "recharts";
import { Progress } from "@/components/ui/progress";
import { FaArrowUp, FaCalendar } from "react-icons/fa";
// Mock data for the line chart
const viewsData = [
  { date: "SEP", users: 800, visitors: 600 },
  { date: "OCT", users: 950, visitors: 750 },
  { date: "NOV", users: 1200, visitors: 900 },
  { date: "DEC", users: 700, visitors: 500 },
  { date: "JAN", users: 1100, visitors: 900 },
  { date: "FEB", users: 1400, visitors: 1000 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(217, 91%, 60%)",
  },
  visitors: {
    label: "Visitors",
    color: "hsl(190, 80%, 70%)",
  },
} satisfies ChartConfig;

const DashboardMonthlyCompareStats = () => {
  return (
    <div>
      <div className="col-span-1 bg-white rounded-lg border p-[1.5rem] my-auto h-[23rem] font-dm-sans ">
        <div className="pb-4">
          <div className="flex items-center">
            {/* <input type="checkbox" id="this-month" className="mr-2" checked /> */}
            <label
              htmlFor="this-month"
              className="text-sm flex gap-1 items-center text-muted-foreground text-[#A3AED0] bg-[#F4F7FE] px-[.8rem] h-[2rem] rounded-md "
            >
              <FaCalendar className=" text-[#A3AED0]" />
              This month
            </label>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <div className="text-[1.9rem] font-dm-sans font-[600] ">1.4k</div>
            <div className="flex items-center mt-1">
              <span className="text-sm text-[#A3AED0]">Views</span>
              <span className=" flex items-center font-[500] text-[.8rem] text-green-500 ml-2">
                <FaArrowUp />
                +22%
              </span>
            </div>
          </div>
        </div>
        <div>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[200px] w-full"
          >
            <AreaChart data={viewsData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0061FF" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#0061FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#33BDF2" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#33BDF2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <CartesianGrid vertical={false} opacity={0.2} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#0061FF"
                strokeWidth={2}
                fill="url(#colorUsers)"
              />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#33BDF2"
                strokeWidth={2}
                fill="url(#colorVisitors)"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardMonthlyCompareStats;
