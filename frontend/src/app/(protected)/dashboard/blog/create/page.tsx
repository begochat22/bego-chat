"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Dashboard } from "@uppy/react";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

import { Button } from "../../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../components/ui/tabs";
import CreateBlogTab from "../../../../../components/custom/blog/CreateBlogTab";
import SeoMetaPage from "../../../../../components/custom/blog/SeoMetaPage";

// API base URL
const ApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Combined schema for both tabs
const basicFormSchema = z.object({
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

const seoFormSchema = z.object({
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

const BlogPostPage: React.FC = () => {
  const router = useRouter();

  // Basic tab state
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const basicForm = useForm<z.infer<typeof basicFormSchema>>({
    resolver: zodResolver(basicFormSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      content: "",
    },
  });

  // SEO tab state
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [ogImageUrl, setOgImageUrl] = useState<string>("");

  const seoForm = useForm<z.infer<typeof seoFormSchema>>({
    resolver: zodResolver(seoFormSchema),
    mode: "onBlur",
    defaultValues: {
      metaTitle: "",
      metaDescription: "",
      openGraphTitle: "",
      openGraphDesc: "",
      canonicalUrl: "",
    },
  });

  // Initialize Uppy for thumbnail upload
  const basicUppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 1,
      allowedFileTypes: ["image/*"],
    },
    autoProceed: true,
  })
    .use(XHRUpload, {
      endpoint: `${ApiUrl}/api/assets/upload`,
      fieldName: "image",
    })
    .on("upload-success", (file, response) => {
      const data = response?.body?.data as { path: string } | undefined;

      if (data?.path) {
        const uploadedUrl = data.path;
        setThumbnailUrl(uploadedUrl);
        toast.success(`Thumbnail uploaded successfully!`);
      } else {
        console.error("Path is not available in the response data.");
      }
    })
    .on("complete", () => {
      toast.success("Upload complete!");
    });

  // Initialize Uppy for OG image upload
  const seoUppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 1,
      allowedFileTypes: ["image/*"],
    },
    autoProceed: true,
  })
    .use(XHRUpload, {
      endpoint: `${ApiUrl}/api/assets/upload`,
      fieldName: "image",
    })
    .on("upload-success", (file, response) => {
      const data = response?.body?.data as { path: string } | undefined;

      if (data?.path) {
        const uploadedUrl = data.path;
        setOgImageUrl(uploadedUrl);
        toast.success(`Open Graph image uploaded successfully!`);
      } else {
        console.error("Path is not available in the response data.");
      }
    })
    .on("complete", () => {
      toast.success("Upload complete!");
    });

  // Function to check if slug is valid
  const handleCheckSlug = async () => {
    const slug = basicForm.getValues("slug");

    if (!slug) {
      toast.error("Please enter a slug first");
      return;
    }

    try {
      const response = await fetch(
        `${ApiUrl}/api/blog/check-slug?slug=${slug}`
      );
      const data = await response.json();

      if (data.available) {
        toast.success("Slug is available!");
      } else {
        toast.error("Slug is already taken. Please choose another one.");
      }
    } catch (error) {
      toast.error("Error checking slug availability");
    }
  };

  // Function to handle tag management
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Combined submit function
  const handleSubmitBlog = async () => {
    try {
      // Validate both forms
      const isBasicValid = await basicForm.trigger();
      const isSeoValid = await seoForm.trigger();

      if (!isBasicValid || !isSeoValid) {
        toast.error("Please fill all required fields in both tabs");
        return;
      }

      if (!thumbnailUrl) {
        toast.error("Please upload a thumbnail image");
        return;
      }

      // Get values from both forms
      const basicData = basicForm.getValues();
      const seoData = seoForm.getValues();

      // Combine all data
      const blogData = {
        // Basic data
        title: basicData.title,
        slug: basicData.slug,
        description: basicData.description,
        content: content,
        thumbnail: thumbnailUrl,

        // SEO data
        metaTitle: seoData.metaTitle,
        metaDescription: seoData.metaDescription,
        openGraphTitle: seoData.openGraphTitle,
        openGraphDesc: seoData.openGraphDesc,
        canonicalUrl: seoData.canonicalUrl,
        tags: tags,
        openGraphImage: ogImageUrl,
      };

      // Submit to API
      const response = await fetch(`${ApiUrl}/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Blog post created successfully!");
        basicForm.reset();
        seoForm.reset();
        setThumbnailUrl("");
        setOgImageUrl("");
        setContent("");
        setTags([]);

        const responseData = await response.json();
        if (responseData?.blog?._id) {
          router.push(`/blog/${responseData.blog._id}`);
        }
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred");
    }
  };

  // Preview blog post
  const handlePreviewBlog = () => {
    // Implement preview functionality
    alert("Blog post preview");
  };

  return (
    <div className="w-full flex flex-col gap-[2rem] px-[2rem]">
      <Tabs defaultValue="basic" className="mt-[1rem] relative w-full">
        <div className="flex sticky z-[9] top-[1rem] justify-between">
          <TabsList className="w-fit h-[2.7rem] p-[.3rem] rounded-[.3rem]">
            <TabsTrigger
              value="basic"
              className="data-[state=active]:text-white text-[#636363] data-[state=active]:bg-primary bg-accent rounded-[.3rem] cursor-pointer"
            >
              Basic
            </TabsTrigger>
            <TabsTrigger
              value="seo-meta-data"
              className="data-[state=active]:text-white text-[#636363] data-[state=active]:bg-primary bg-accent rounded-[.3rem] cursor-pointer"
            >
              SEO Meta Data
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-[1rem] items-center">
            <Button
              onClick={handlePreviewBlog}
              className="bg-white cursor-pointer h-[2.5rem] border hover:bg-accent rounded-[.3rem] text-black"
            >
              <FaEye />
              Preview
            </Button>
            <Button
              onClick={handleSubmitBlog}
              className="bg-primary cursor-pointer h-[2.5rem] hover:bg-primary/70 rounded-[.3rem] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M8.994 0H4.25C3.78587 0 3.34075 0.184375 3.01256 0.512563C2.68437 0.840752 2.5 1.28587 2.5 1.75V12.25C2.5 13.216 3.284 14 4.25 14H7.707C7.61458 13.6731 7.55265 13.3383 7.522 13H4.25C4.05109 13 3.86032 12.921 3.71967 12.7803C3.57902 12.6397 3.5 12.4489 3.5 12.25V1.75C3.5 1.55109 3.57902 1.36032 3.71967 1.21967C3.86032 1.07902 4.05109 1 4.25 1H8.5V4.5C8.5 4.89782 8.65804 5.27936 8.93934 5.56066C9.22064 5.84196 9.60218 6 10 6H13.5V7.022C13.844 7.05333 14.1773 7.115 14.5 7.207V5.48C14.4901 5.02882 14.3063 4.59889 13.987 4.28L10.22 0.513C9.89617 0.18889 9.45814 0.00470359 9 0H8.994ZM9.5 1.207L9.513 1.22L13.28 4.987L13.293 5H10C9.86739 5 9.74021 4.94732 9.64645 4.85355C9.55268 4.75979 9.5 4.63261 9.5 4.5V1.207ZM4 15H8.1C8.284 15.3587 8.503 15.692 8.757 16H4C3.07174 16 2.1815 15.6313 1.52513 14.9749C0.868749 14.3185 0.5 13.4283 0.5 12.5V11.5C0.5 11.3674 0.552679 11.2402 0.646447 11.1464C0.740215 11.0527 0.867392 11 1 11C1.13261 11 1.25979 11.0527 1.35355 11.1464C1.44732 11.2402 1.5 11.3674 1.5 11.5V12.5C1.5 13.163 1.76339 13.7989 2.23223 14.2678C2.70107 14.7366 3.33696 15 4 15ZM4.5 3.5C4.5 3.36739 4.55268 3.24021 4.64645 3.14645C4.74021 3.05268 4.86739 3 5 3H7C7.13261 3 7.25979 3.05268 7.35355 3.14645C7.44732 3.24021 7.5 3.36739 7.5 3.5C7.5 3.63261 7.44732 3.75979 7.35355 3.85355C7.25979 3.94732 7.13261 4 7 4H5C4.86739 4 4.74021 3.94732 4.64645 3.85355C4.55268 3.75979 4.5 3.63261 4.5 3.5ZM5 5C4.86739 5 4.74021 5.05268 4.64645 5.14645C4.55268 5.24021 4.5 5.36739 4.5 5.5C4.5 5.63261 4.55268 5.75979 4.64645 5.85355C4.74021 5.94732 4.86739 6 5 6H7C7.13261 6 7.25979 5.94732 7.35355 5.85355C7.44732 5.75979 7.5 5.63261 7.5 5.5C7.5 5.36739 7.44732 5.24021 7.35355 5.14645C7.25979 5.05268 7.13261 5 7 5H5ZM5 7C4.86739 7 4.74021 7.05268 4.64645 7.14645C4.55268 7.24021 4.5 7.36739 4.5 7.5C4.5 7.63261 4.55268 7.75979 4.64645 7.85355C4.74021 7.94732 4.86739 8 5 8H7C7.13261 8 7.25979 7.94732 7.35355 7.85355C7.44732 7.75979 7.5 7.63261 7.5 7.5C7.5 7.36739 7.44732 7.24021 7.35355 7.14645C7.25979 7.05268 7.13261 7 7 7H5ZM17.5 12.5C17.5 13.6935 17.0259 14.8381 16.182 15.682C15.3381 16.5259 14.1935 17 13 17C11.8065 17 10.6619 16.5259 9.81802 15.682C8.97411 14.8381 8.5 13.6935 8.5 12.5C8.5 11.3065 8.97411 10.1619 9.81802 9.31802C10.6619 8.47411 11.8065 8 13 8C14.1935 8 15.3381 8.47411 16.182 9.31802C17.0259 10.1619 17.5 11.3065 17.5 12.5ZM13.5 10.5C13.5 10.3674 13.4473 10.2402 13.3536 10.1464C13.2598 10.0527 13.1326 10 13 10C12.8674 10 12.7402 10.0527 12.6464 10.1464C12.5527 10.2402 12.5 10.3674 12.5 10.5V12H11C10.8674 12 10.7402 12.0527 10.6464 12.1464C10.5527 12.2402 10.5 12.3674 10.5 12.5C10.5 12.6326 10.5527 12.7598 10.6464 12.8536C10.7402 12.9473 10.8674 13 11 13H12.5V14.5C12.5 14.6326 12.5527 14.7598 12.6464 14.8536C12.7402 14.9473 12.8674 15 13 15C13.1326 15 13.2598 14.9473 13.3536 14.8536C13.4473 14.7598 13.5 14.6326 13.5 14.5V13H15C15.1326 13 15.2598 12.9473 15.3536 12.8536C15.4473 12.7598 15.5 12.6326 15.5 12.5C15.5 12.3674 15.4473 12.2402 15.3536 12.1464C15.2598 12.0527 15.1326 12 15 12H13.5V10.5Z"
                  fill="white"
                />
              </svg>
              Post
            </Button>
          </div>
        </div>

        <TabsContent value="basic">
          <CreateBlogTab
            form={basicForm}
            thumbnailUrl={thumbnailUrl}
            setThumbnailUrl={setThumbnailUrl}
            content={content}
            setContent={setContent}
            uppy={basicUppy}
            handleCheckSlug={handleCheckSlug}
          />
        </TabsContent>

        <TabsContent value="seo-meta-data">
          <SeoMetaPage
            form={seoForm}
            tags={tags}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
            handleAddTag={handleAddTag}
            handleRemoveTag={handleRemoveTag}
            ogImageUrl={ogImageUrl}
            setOgImageUrl={setOgImageUrl}
            uppy={seoUppy}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogPostPage;
