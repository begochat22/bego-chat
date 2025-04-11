import React from "react";
import { CustomImage } from "../CustomImage";
import { IoHeartSharp } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiShareFat } from "react-icons/pi";
import { BsBookmarkPlusFill } from "react-icons/bs";

const BlogCard = ({
  data,
}: {
  data: {
    thumbnail: string;
    title: string;
    description: string;
    slug: string;
    likes: number;
    shares: number;
    comments: number;
    author: any;
  };
}) => {
  return (
    <div className=" bg-white  w-[30rem] font-dm-sans rounded-lg shadow-md  flex flex-col gap-2">
      <CustomImage
        src={data.thumbnail}
        alt={data.title}
        width={500}
        height={300}
        className="w-full h-[14rem] rounded-t-lg object-cover"
      />
      <div className="p-4 pt-0 flex flex-col">
        <h3 className=" font-[500] text-[1.12rem] line-clamp-2 ">
          {data.title}
        </h3>
        <div className=" flex items-center justify-between w-full relative ">
          <p className="text-[#3536466e] text-[.9rem] ">By {data.author}</p>
          <div className="flex gap-[.5rem] justify-between">
            <div className=" bg-white size-[2.5rem] rounded-full absolute right-0 top-[-5rem]   flex items-center justify-center shadow-md">
              <div className=" size-[2rem] rounded-full bg-primary flex items-center justify-center text-white  ">
                <BsBookmarkPlusFill />
              </div>
            </div>
            <div className=" flex items-center gap-0.5  ">
              <IoHeartSharp className=" text-red-500 text-[1.2rem] " />
              <div className=" text-[#979797]  ">{data.likes}</div>
            </div>
            <div className=" flex items-center gap-0.5  ">
              <HiOutlineChatBubbleOvalLeftEllipsis className=" text-[#77777A] text-[1.2rem] " />
              <div className=" text-[#979797]  ">{data.comments}</div>
            </div>
            <div className=" flex items-center gap-0.5  ">
              <PiShareFat className=" text-[#77777A] text-[1.2rem] " />
              <div className=" text-[#979797]  ">{data.shares}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
