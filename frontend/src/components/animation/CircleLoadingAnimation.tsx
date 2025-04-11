"use client";

import dynamic from "next/dynamic";
import assets from "../../../public/assetsManager";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const CircleLoadingAnimation = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center mx-auto  bg-primary-foreground ">
      <div className=" w-[28rem]    z-10 z-index-10 ">
        <DynamicLottie
          animationData={assets.animation.CircleLoadingLottie}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />
      </div>
    </div>
  );
};

export default CircleLoadingAnimation;
