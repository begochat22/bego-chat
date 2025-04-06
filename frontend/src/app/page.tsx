"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { CustomImage } from "@/components/custom/common/CustomImage";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-100 to-blue-100">
      <div className="w-[40rem] relative h-[38rem] flex flex-col items-center gap-4 p-6 shadow-lg rounded-xl bg-white">
        <h2 className="text-center font-[400] font-poppins text-[2rem]">
          Starter Template
        </h2>

        {/* Logos */}
        <div className="flex gap-[1rem] justify-center mt-[2rem]">
          {/* React */}
          <div className="flex flex-col items-center">
            <CustomImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktU9SiaDQGVr_kz8OL4Bzc7UT7UGnt_Yg_w&s"
              alt="React"
              width={100}
              height={100}
              className="object-contain w-20 h-20"
            />
            <span className="mt-2 font-semibold text-gray-600">Next</span>
          </div>
          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <CustomImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              alt="TypeScript"
              width={100}
              height={100}
              className="object-contain w-20 h-20"
            />
            <span className="mt-2 font-semibold text-gray-600">TypeScript</span>
          </div>
          {/* Vite */}
          <div className="flex flex-col items-center">
            <CustomImage
              src="https://www.svgrepo.com/show/374167/vite.svg"
              alt="Vite"
              width={100}
              height={100}
              className="object-contain w-20 h-20"
            />
            <span className="mt-2 font-semibold text-gray-600">Vite</span>
          </div>
          {/* Tailwind */}
          <div className="flex flex-col items-center">
            <CustomImage
              src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
              className="object-contain w-20 h-20"
            />
            <span className="mt-2 font-semibold text-gray-600">
              Tailwind CSS
            </span>
          </div>
          {/* Shadcn */}
          <div className="flex flex-col items-center">
            <CustomImage
              src="https://archive.org/download/github.com-shadcn-ui-ui_-_2023-08-09_16-03-10/cover.jpg"
              alt="Shadcn"
              width={100}
              height={100}
              className="object-contain w-20 h-20 rounded-[.5rem]"
            />
            <span className="mt-2 font-semibold text-gray-600">Shadcn</span>
          </div>
        </div>

        {/* Font Styles */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-xl font-[400] text-gray-500 mt-[1.4rem]">
            Explore Different Font Styles
          </h2>
          <div className="w-fit">
            <li className="text-lg text-gray-800 font-[600] font-montserrat">
              Montserrat
            </li>
            <li className="text-lg text-gray-800 font-[600] font-openSans">
              Open Sans
            </li>
            <li className="text-lg text-gray-800 font-[600] font-poppins">
              Poppins
            </li>
          </div>
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/Abdev1205/next-ts-shadcn-template"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 mt-4 text-white transition bg-gray-800 rounded-[.5rem] shadow-md hover:bg-gray-700"
        >
          <FaGithub />
          GitHub Repository
        </a>

        {/* Taost */}
        <div className="flex gap-[1rem] items-center justify-center">
          <Button
            onClick={() => toast.success("Success Toast")}
            className="flex items-center gap-2 px-4 py-2 mt-4 text-white transition bg-primary rounded-[.5rem] shadow-md hover:bg-green-700"
          >
            Success Toast
          </Button>

          <Button
            onClick={() => toast.error("Error Toast")}
            className="flex items-center gap-2 px-4 py-2 mt-4 text-white transition bg-red-800 rounded-[.5rem] shadow-md hover:bg-red-700"
          >
            Error Toast
          </Button>

          <Button
            onClick={() => toast("Default Toast")}
            className="flex items-center gap-2 px-4 py-2 mt-4 text-white transition bg-gray-800 rounded-[.5rem] shadow-md hover:bg-gray-700"
          >
            Default Toast
          </Button>
        </div>

        {/* Footer */}
        <footer className="absolute text-sm text-center text-gray-500 bottom-4">
          <p>
            Developed by{" "}
            <a
              href="https://abhaymishra.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Abhay Mishra
            </a>{" "}
            <span className="text-red-500">♥</span>
          </p>
          <p>Powered by Next + TypeScript + Vite + Tailwind + Shadcn</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
