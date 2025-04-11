import React from "react";

const DashboardStatsCard = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    value: number;
    icon: React.ReactNode;
  };
}) => {
  return (
    <div className=" bg-white px-[1rem] h-[5.5rem]  flex items-center border rounded-lg gap-4 font-dm-sans  ">
      <div className="bg-[#F4F7FE] rounded-full w-12 h-12 text-[1.6rem] text-primary flex items-center justify-center ">
        {data.icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[.9rem] font-[500] text-[#A3AED0]">{data.title}</p>
        <h2 className="text-[#2B3674] text-[1.3rem] font-[600]">
          {data.value}
        </h2>
      </div>
    </div>
  );
};

export default DashboardStatsCard;
