// app/dashboard/blog/page.tsx
"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import NoResultAnimation from "@/components/animation/NoResultAnimation";
import { MdDelete, MdEdit } from "react-icons/md";

// Define the blog post type
interface BlogPost {
  slug: string;
  category: string;
  title: string;
  created: string;
}

// Sample data matching your image
const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tech-trend-spotlight",
    category: "Food",
    title: "Tech Trends",
    created: "21.03.2021",
  },
  {
    slug: "code-daily-digest",
    category: "Health",
    title: "Code Digest",
    created: "21.03.2021",
  },
  {
    slug: "frontend-fastlane",
    category: "Finance",
    title: "Frontend Rush",
    created: "21.03.2021",
  },
  {
    slug: "devlog-bytes",
    category: "Sports",
    title: "Dev Bytes",
    created: "21.03.2021",
  },
  {
    slug: "build-better-ui",
    category: "Food",
    title: "UI Hacks",
    created: "21.03.2021",
  },
  {
    slug: "debug-dump",
    category: "Defence",
    title: "Debug Logs",
    created: "21.03.2021",
  },
  {
    slug: "design-snippets",
    category: "News",
    title: "Design Bits",
    created: "21.03.2021",
  },
  {
    slug: "stack-thoughts",
    category: "Politics",
    title: "Stack Talk",
    created: "21.03.2021",
  },
  {
    slug: "coffee-code-talks",
    category: "Sports",
    title: "Code Chats",
    created: "21.03.2021",
  },
  {
    slug: "weekly-web-roundup",
    category: "Health",
    title: "Web Wrap",
    created: "21.03.2021",
  },
];

// Unique categories for filter dropdown
const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

export default function DashboardBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Filter posts based on search term, category, and date
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;
    const matchesDate = !date || post.created === format(date, "dd.MM.yyyy");

    return matchesSearch && matchesCategory && matchesDate;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Generate pagination numbers
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if totalPages <= maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Always show first page
      items.push(1);

      // Show ellipsis if currentPage > 3
      if (currentPage > 3) {
        items.push("ellipsis-start");
      }

      // Show pages around currentPage
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }

      // Show ellipsis if currentPage < totalPages - 2
      if (currentPage < totalPages - 2) {
        items.push("ellipsis-end");
      }

      // Always show last page
      items.push(totalPages);
    }

    return items;
  };

  return (
    <div className="px-[2rem] mt-[2rem] ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="relative   w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search Blogs"
              className="pl-8 rounded-sm outline-none bg-white focus-visible:ring-primary focus-visible:ring-1 "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px] bg-white ">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Categories">All Categories</SelectItem>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-fit justify-start text-left font-normal",
                    !date && ""
                  )}
                >
                  <CalendarIcon className="mr-0.5 h-4 w-4 text-black/70 " />
                  {date ? format(date, "PPP") : "Created"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {false && (
          <div>
            <NoResultAnimation />
          </div>
        )}

        {true && (
          <div>
            <div className="rounded-md border mt-[1rem] overflow-clip ">
              <Table>
                <TableHeader className=" bg-accent rounded-md border font-dm-sans  font-[600">
                  <TableRow>
                    <TableHead className="min-w-[16rem]">Slug</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="min-w-[12rem]">Title</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="w-[6rem]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPosts.map((post) => (
                    <TableRow
                      key={post.slug}
                      className=" bg-white rounded-md text-[#636363] hover:bg-accent "
                    >
                      <TableCell className=" font-[500] ">
                        {post.slug}
                      </TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.created}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 cursor-pointer  "
                          >
                            <MdEdit />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 cursor-pointer"
                          >
                            <MdDelete />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Pagination className=" mt-[1rem] ">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-20" : ""
                    }
                  />
                </PaginationItem>

                {generatePaginationItems().map((item, index) => {
                  if (item === "ellipsis-start" || item === "ellipsis-end") {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }

                  return (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(item as number);
                        }}
                        isActive={currentPage === item}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-20"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
