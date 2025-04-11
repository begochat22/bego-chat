"use client";

import NextTopLoader from "nextjs-toploader";

const Progress = () => {
  return (
    <>
      <NextTopLoader
        color="#0071D5"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #0071D5,0 0 5px #0071D5"
      />
    </>
  );
};

export default Progress;
