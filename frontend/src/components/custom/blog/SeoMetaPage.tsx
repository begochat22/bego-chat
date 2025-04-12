"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Dashboard } from "@uppy/react";
import { MdClose } from "react-icons/md";
import Uppy from "@uppy/core";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CustomImage } from "@/components/custom/common/CustomImage";
import { z } from "zod";

const formSchema = z.object({
  metaTitle: z
    .string()
    .min(1, { message: "Meta title is required" })
    .max(60, { message: "Meta title should be maximum 60 characters" }),
  metaDescription: z
    .string()
    .min(1, { message: "Meta description is required" })
    .max(20, { message: "Meta description should be maximum 160 characters" }),
  openGraphTitle: z
    .string()
    .min(1, { message: "Open Graph title is required" }),
  openGraphDesc: z
    .string()
    .min(1, { message: "Open Graph description is required" }),
  canonicalUrl: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
});

interface SeoMetaPageProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  uppy: any;
  ogImageUrl: string;
  setOgImageUrl: (url: string) => void;
  tags: string[];
  currentTag: string;
  setCurrentTag: (tag: string) => void;
  handleAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemoveTag: (tag: string) => void;
}

const SeoMetaPage: React.FC<SeoMetaPageProps> = ({
  form,
  uppy,
  ogImageUrl,
  setOgImageUrl,
  tags,
  currentTag,
  setCurrentTag,
  handleAddTag,
  handleRemoveTag,
}) => {
  return (
    <div className=" mb-[5rem] ">
      <div className="pt-6">
        <Form {...form}>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Title */}
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem className="h-[5rem]">
                    <FormLabel className="text-[#636363] font-normal">
                      Meta Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Meta Title"
                        {...field}
                        className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Canonical URL */}
              <FormField
                control={form.control}
                name="canonicalUrl"
                render={({ field }) => (
                  <FormItem className="h-[5rem]">
                    <FormLabel className="text-[#636363] font-normal">
                      Canonical URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Canonical URL"
                        {...field}
                        className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Meta Description */}
            <FormField
              control={form.control}
              name="metaDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#636363] font-normal">
                    Meta Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your Meta description"
                      {...field}
                      className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1 min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Blog Tags */}
            <div className="flex flex-col gap-2">
              <FormLabel className="text-[#636363] font-normal">
                Blog Tags
              </FormLabel>
              <Input
                placeholder="Add a tag and press enter"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleAddTag}
                className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
                  >
                    <span>{tag}</span>
                    <MdClose
                      className="cursor-pointer"
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Open Graph Title */}
              <FormField
                control={form.control}
                name="openGraphTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#636363] font-normal">
                      Open Graph Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Open Graph Title"
                        {...field}
                        className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Open Graph Description */}
              <FormField
                control={form.control}
                name="openGraphDesc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#636363] font-normal">
                      Open Graph Description{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Open Graph Description"
                        {...field}
                        className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Open Graph Image */}
            <div className="flex flex-col gap-4">
              <FormLabel className="text-[#636363] font-normal">
                Open Graph Image
              </FormLabel>

              {!ogImageUrl ? (
                <div className="border border-dashed bg-white border-blue-300 rounded-md p-4">
                  <Dashboard
                    uppy={uppy}
                    height={300}
                    width={1200}
                    proudlyDisplayPoweredByUppy={false}
                  />
                </div>
              ) : (
                <div className="mt-2">
                  <div className="relative w-full max-w-md">
                    <div
                      onClick={() => setOgImageUrl("")}
                      className="absolute z-10 top-2 right-2 w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600"
                    >
                      <MdClose className="text-lg" />
                    </div>
                    <div className="w-full h-48 border rounded-md overflow-hidden">
                      <CustomImage
                        width={400}
                        height={300}
                        src={ogImageUrl}
                        alt="Open Graph Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SeoMetaPage;
