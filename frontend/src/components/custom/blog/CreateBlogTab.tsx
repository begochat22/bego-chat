"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { MdClose } from "react-icons/md";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import { z } from "zod";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

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
import MarkdownEditor from "./MdEditor/MarkdownEditor";

// Schema type for form
const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug must contain only lowercase letters, numbers, and hyphens",
    }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .min(50, { message: "Min 50 characters required" }),
  content: z.string().optional(),
});

interface CreateBlogTabProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  thumbnailUrl: string;
  setThumbnailUrl: (url: string) => void;
  content: string;
  setContent: (content: string) => void;
  uppy: any;
  handleCheckSlug: () => Promise<void>;
}

const CreateBlogTab: React.FC<CreateBlogTabProps> = ({
  form,
  thumbnailUrl,
  setThumbnailUrl,
  content,
  setContent,
  uppy,
  handleCheckSlug,
}) => {
  return (
    <div className="mb-[5rem]">
      <div className="pt-6">
        <Form {...form}>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blog Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="h-[5rem]">
                    <FormLabel className="text-[#636363] font-normal">
                      Blog Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Blog Title"
                        {...field}
                        className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Blog Slug */}
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="h-[5rem]">
                    <FormLabel className="text-[#636363] font-normal">
                      Blog Slug <span className="text-red-500">*</span>
                    </FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          placeholder="Enter your Blog Slug"
                          {...field}
                          className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1"
                        />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={handleCheckSlug}
                        variant="outline"
                        className="whitespace-nowrap"
                      >
                        Check
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Blog Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#636363] font-normal">
                    Blog Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your Blog description"
                      {...field}
                      className="font-normal rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1 min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Blog Thumbnail */}
            <div className="flex flex-col gap-4">
              <FormLabel className="text-[#636363] font-normal">
                {thumbnailUrl ? "Uploaded Thumbnail" : "Blog Thumbnail"}{" "}
                <span className="text-red-500">*</span>
              </FormLabel>

              {!thumbnailUrl && (
                <div className="border border-dashed bg-white border-blue-300 rounded-md p-4">
                  <Dashboard
                    uppy={uppy}
                    height={300}
                    width={1200}
                    proudlyDisplayPoweredByUppy={false}
                  />
                </div>
              )}

              {/* Thumbnail Preview */}
              {thumbnailUrl && (
                <div className="mt-4">
                  <div className="relative w-full max-w-md mt-2">
                    {/* Remove Icon */}
                    <div
                      onClick={() => setThumbnailUrl("")}
                      className="absolute z-10 top-2 right-2 w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600"
                    >
                      <MdClose className="text-lg" />
                    </div>
                    {/* Image */}
                    <div className="w-full h-48 border rounded-md overflow-hidden">
                      <CustomImage
                        width={400}
                        height={300}
                        src={thumbnailUrl}
                        alt="Blog Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-[2rem]">
                <FormField
                  control={form.control}
                  name="content"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-[#636363] font-normal mb-[1rem]">
                        Blog Content
                      </FormLabel>
                      <MarkdownEditor
                        value={content}
                        onChange={(value) => {
                          setContent(value || "");
                        }}
                        height={450}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlogTab;
