import React from "react";
import Progress from "@/components/custom/loader/Progress";
import { Toaster } from "react-hot-toast";
import AuthLayer from "@/layer/AuthLayer";

interface ConfigProviderProps {
  children: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
        }}
      />
      <AuthLayer>{children}</AuthLayer>
      <Progress />
    </>
  );
};

export default ConfigProvider;
