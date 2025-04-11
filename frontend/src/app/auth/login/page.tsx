"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ENV from "@/config/ENV";
import AuthActions from "@/actions/auth";
import useSession from "@/hooks/useSession";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email."),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(3, { message: "Password must be at least 3 characters long" })
    .max(15, { message: "Password must not exceed 15 characters" }),
});

const LoginPage = () => {
  const router = useRouter();
  const [demoSwitchOn, setDemoSwitchOn] = useState(false);
  const { loggedIn, loading, setLoggedIn } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      if (values) {
        const data = {
          email: values.email,
          password: values.password,
        };
        const res = await AuthActions.login(data);
        // if (res?.success) {
        setLoggedIn(true);
        // }
        console.log(res);
        toast.success("User Logged in Successful");
        window.location.href = "/dashboard";
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${ENV.BACKEND_URL}${ENV.AUTH_URL}/google`;
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className=" w-[100%] min-h-[calc(100vh-4rem)]  bg-primary-foreground flex justify-center items-center">
      <div className="w-[30rem] bg-white shadow-md rounded-lg p-8 flex font-dm-sans flex-col gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Email  */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem] font-[400]">
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Email"
                      {...field}
                      className="font-[400] rounded-[.2rem] outline-none focus-visible:ring-primary focus-visible:ring-1  "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem] font-[400]">
                    Password <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your Password"
                      {...field}
                      className="font-[400] rounded-[.2rem] outline-none focus-visible:ring-primary focus-visible:ring-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className={`rounded-[.2rem] bg-primary hover:bg-primary/85 font-[500] font-poppins py-[1.3rem]  `}
            >
              Login
            </Button>
          </form>
        </Form>

        {/* Or line  */}

        <div className=" flex justify-center items-center gap-[.3rem] my-[.5rem] ">
          <div className=" w-[50%] h-[1px]  bg-primary/50 " />
          <span className=" text-gray-400 ">Or</span>
          <div className=" w-[50%] h-[1px] bg-primary/50 " />
        </div>

        {/* Google Login stuff */}

        <Button
          onClick={() => handleGoogleLogin()}
          className=" bg-gray-50 text-black font-openSans font-[500] cursor-pointer w-full hover:bg-gray-200 py-[1.3rem] shadow-none border-[1px] rounded-[.2rem] "
        >
          <FcGoogle className=" text-[1.2rem] " /> Login with Google
        </Button>

        {/* Extra Routing stuff */}
        <div className=" flex justify-center gap-[.4rem] mt-[.6rem] ">
          <p className="text-opacity-50 text-textSecondary ">
            Don't have account,
          </p>
          <Link
            className="underline text-primary  underline-offset-3"
            href="/auth/register"
          >
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
