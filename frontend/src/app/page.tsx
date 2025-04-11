"use client";

import Navbar from "@/components/custom/common/Navbar";
import DevModeOn from "@/components/custom/loader/DevModeOn";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-4rem)] bg-primary-foreground flex justify-center items-center ">
        <DevModeOn />
      </div>
    </div>
  );
};

export default App;
