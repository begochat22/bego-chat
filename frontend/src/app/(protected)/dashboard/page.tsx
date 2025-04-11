"use client";

import React from "react";
import { AreaChart, CartesianGrid, Area, XAxis, BarChart, Bar } from "recharts";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { HiMiniChartBar } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";

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
import { Progress } from "@/components/ui/progress";
import DashboardStatsCard from "@/components/custom/common/card/DashboardStatsCard";
import { BiTimer } from "react-icons/bi";
import { GiStopwatch } from "react-icons/gi";
import DashboardMonthlyCompareStats from "@/components/custom/charts/DashboardMonthlyCompareStats";
import DashboardPopularityGenre from "@/components/custom/charts/DashboardPopularityGenre";
import BlogCard from "@/components/custom/common/card/BlogCard";

const statsChart = [
  {
    id: 1,
    title: "Blogs",
    value: 120,
    icon: <HiMiniChartBar />,
  },
  {
    id: 2,
    title: "Watch Time",
    value: 200,
    icon: <GiStopwatch />,
  },
  {
    id: 3,
    title: "Views",
    value: "1.4k",
    icon: <FaEye />,
  },
  {
    id: 4,
    title: "Likes",
    value: 320,
    icon: <IoHeartSharp />,
  },
];

const blogData = [
  {
    thumbnail:
      "https://res.cloudinary.com/dujgngjro/image/upload/v1744357754/1f6a7c066ec45338a264003a49687dc5_ndrkn8.png",
    title: "Pneumatic Resistance and its Role in Power Development",
    slug: "pneumatic-resistance-and-its-role-in-power-development",
    likes: 16,
    shares: 2,
    comments: 5,
    author: "Jonathan Ward ",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dujgngjro/image/upload/v1744357783/3eedc30d39a80edb06f620c93c1e7847_sma0ey.png",
    title:
      "Programming Resisted Sprints on the 1080 Sprint , reasearched and proven in science",
    slug: "programming-resisted-sprints-on-the-1080-sprint",
    likes: 16,
    shares: 2,
    comments: 5,
    author: "Jonathan Ward ",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dujgngjro/image/upload/v1744357796/58914bda53b94a932f7f5c0eee43aca2_k8tr5k.png",
    title:
      "Blockchain in the Financial Sector, its pros and cons with detail documentation",
    slug: "blockchain-in-the-financial-sector-its-pros-and-cons",
    likes: 16,
    shares: 2,
    comments: 5,
    author: "Jonathan Ward ",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/dujgngjro/image/upload/v1744357808/7772e88a14b9ad31f3bf258481d2ce7f_up04ke.png",
    title:
      "2025 Style Forecast: Trendy Looks You Can Shop now from any online Website",
    slug: "2025-style-forecast-trendy-looks-you-can-shop",
    likes: 16,
    shares: 2,
    comments: 5,
    author: "Jonathan Ward ",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statsChart.map((stat) => {
          return <DashboardStatsCard data={stat as any} key={stat.id} />;
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Views Chart */}
        <DashboardMonthlyCompareStats />

        {/* Right Side - Top Category */}
        <DashboardPopularityGenre />
      </div>

      <div className=" mt-8 font-dm-sans ">
        <h2 className=" font-[500] text-[1.3rem] ">Top Blogs</h2>

        <div className=" flex gap-6 flex-wrap mt-[2rem]  ">
          {blogData.map((blog) => {
            return <BlogCard data={blog as any} key={blog.slug} />;
          })}
        </div>
      </div>
    </div>
  );
}
