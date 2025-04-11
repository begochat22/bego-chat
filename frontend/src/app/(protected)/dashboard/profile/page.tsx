"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

import { FaEdit, FaUserEdit } from "react-icons/fa";
import { CustomImage } from "@/components/custom/common/CustomImage";
import { MdEdit } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import useSession from "@/hooks/useSession";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email."),
  mobile: z.string().min(1, { message: "Mobile number is required" }),
  location: z.string().min(1, { message: "Location is required" }),
});

const ProfilePage = () => {
  const { logout } = useSession();
  const [userData, setUserData] = useState({
    name: "Your name",
    email: "yourname@gmail.com",
    mobile: "1234567890",
    location: "USA",
    profilePicture:
      "https://res.cloudinary.com/dujgngjro/image/upload/v1731783000/CloudinaryDemo/neohusgtlq54yal0lg6b.webp",
  });
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      location: userData.location,
    },
  });

  useEffect(() => {
    // You would normally fetch user data here
    form.reset({
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      location: userData.location,
    });
  }, [userData, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      // Simulate API call
      // const res = await api.put(`/api/user/profile`, values, {
      //   withCredentials: true,
      // });

      // For demo purposes, update state directly
      setUserData({
        ...userData,
        ...values,
      });

      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full font-openSans">
      <Card className="w-full bg-white max-w-md shadow-sm border rounded-md ">
        <CardContent className="pt-6 relative  ">
          <Button
            onClick={() => logout()}
            className=" absolute top-[-.5rem] right-[.5rem] bg-white border hover:bg-accent cursor-pointer text-black shadow-none rounded-full "
          >
            <LuLogOut />
            Logout
          </Button>
          <div className="flex items-center gap-4 pb-6 border-b">
            <div className="relative">
              <CustomImage
                width={100}
                height={100}
                src={userData.profilePicture}
                alt="Profile Picture"
                className="size-16 rounded-full"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">{userData.name}</h2>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-6"
            >
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-700 font-medium">
                  Name
                </FormLabel>
                <div className="w-1/2 text-right">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="text-right border-none focus-visible:ring-0 p-0"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-700 font-medium">
                  Email account
                </FormLabel>
                <div className="w-1/2 text-right">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="text-right border-none focus-visible:ring-0 p-0"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-700 font-medium">
                  Mobile number
                </FormLabel>
                <div className="w-1/2 text-right">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="text-right border-none focus-visible:ring-0 p-0"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-700 font-medium">
                  Location
                </FormLabel>
                <div className="w-1/2 text-right">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="text-right border-none focus-visible:ring-0 p-0"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/70 cursor-pointer text-white font-medium py-2 rounded-md mt-4"
                disabled={loading || !form.formState.isValid}
              >
                Save Change
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
