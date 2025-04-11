import { Progress } from "@/components/ui/progress";
import React from "react";

const DashboardPopularityGenre = () => {
  // Mock data for categories
  const categoryData = [
    { id: "01", name: "Food", popularity: 75, views: 650, color: "#FF4D4F" },
    { id: "02", name: "Sports", popularity: 60, views: 240, color: "#4CAF50" },
    { id: "03", name: "Fashion", popularity: 40, views: 180, color: "#9C27B0" },
    {
      id: "04",
      name: "Politics",
      popularity: 25,
      views: 120,
      color: "#FF9800",
    },
  ];
  return (
    <div className="col-span-1  bg-white rounded-lg border p-[1.5rem] my-auto h-[23rem] font-dm-sans ">
      <div>
        <div className=" text-[1.1rem] font-[600]  ">Top Category</div>
      </div>
      <div>
        <div className="space-y-6 mt-4">
          {categoryData.map((category) => (
            <div key={category.id} className="space-y-2   ">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {category.id}
                  </span>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Popularity
                  </span>
                  <span className="text-sm font-medium">Views</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full max-w-xs">
                  <Progress
                    value={category.popularity}
                    className="h-2"
                    style={
                      {
                        backgroundColor: "#e5e7eb",
                        "--progress-color": category.color,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="w-8 h-4 rounded-sm"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm font-medium">{category.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPopularityGenre;
