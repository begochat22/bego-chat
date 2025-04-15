"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  MessageSquare,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Mail,
  Star,
  Globe,
  Play,
  Menu,
} from "lucide-react";
import Navbar from "@/components/custom/common/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Navigation */}
        {/* Hero Section with Split Design */}
        {/* Hero Section - Centered */}
        <section className="pt-32 bg-gradient-to-br pb-[20rem] from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 text-white -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-100/50 blur-3xl -z-10"></div>
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              Just launched: Bego Chat AI Assistant
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white bg-clip-text">
              Chat Smarter, <br />
              Not Harder
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              The next evolution of messaging with AI-powered conversations that
              understand your needs and help you communicate effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-white text-black rounded-full px-8"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-white bg-transparent hover:text-white border-white hover:bg-white/10"
              >
                See Demo <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        {/* Chat Preview */}
        <div className="relative w-[50rem] mt-[-20rem] mx-auto px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
          <Card className="overflow-hidden border-0 shadow-xl p-0 relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-0">
              <div className="bg-purple-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                      BC
                    </div>
                    <div>
                      <p className="font-medium text-white">Bego Chat</p>
                      <p className="text-xs text-indigo-200">Team Workspace</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                    >
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 max-h-[700px] overflow-y-auto">
                <div className="flex items-center justify-center py-3">
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white font-medium">
                      A
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                      <p className="text-sm">
                        Morning team! I've pushed the latest design updates to
                        our repository.
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        9:32 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-medium">
                      S
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                      <p className="text-sm">
                        Awesome work! The new animation feels much smoother.
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        9:35 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none max-w-xs">
                      <p className="text-sm">
                        Thanks! I've also fixed that transition bug we were
                        seeing on mobile devices.
                      </p>
                      <p className="text-xs text-indigo-200 mt-1">9:40 AM</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-indigo-800 flex-shrink-0 flex items-center justify-center text-white font-medium">
                      You
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center text-white font-medium">
                      T
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-xs">
                      <p className="text-sm">
                        Perfect timing! Client meeting is this afternoon and
                        they'll be thrilled to see these improvements.
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        9:43 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Type your message..."
                    className="bg-slate-100 dark:bg-slate-800 border-0"
                  />
                  <Button
                    size="icon"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white h-10 w-10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Brands Section */}
        <section className="py-12 bg-white ">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
              TRUSTED BY INNOVATIVE COMPANIES
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                "Acme",
                "Globex",
                "Initech",
                "Massive Dynamic",
                "Stark Industries",
              ].map((brand) => (
                <div key={brand} className="h-8 flex items-center">
                  <span className="text-xl font-bold text-slate-400 dark:text-slate-600">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Grid Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Everything You Need in One Place
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Designed to streamline your team's workflow with powerful
                features that adapt to how you work
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Smart Messaging",
                  description:
                    "AI-powered communication with real-time translation and smart replies for efficient conversations.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Enterprise Security",
                  description:
                    "End-to-end encryption with advanced access controls and compliance certifications.",
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Global Connectivity",
                  description:
                    "Connect seamlessly across time zones with automatic status updates and availability.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Team Spaces",
                  description:
                    "Organized channels and threads for focused discussions and project management.",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Instant Integration",
                  description:
                    "Connect with your favorite tools - Notion, Jira, Google Workspace, and more.",
                },
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: "Task Management",
                  description:
                    "Turn conversations into actionable tasks with deadlines, assignments, and tracking.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-purple-900 dark:text-indigo-400 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Interactive Demo Section */}
        <section className="py-20 px-4 bg-indigo-50 dark:bg-indigo-950/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
                  See It In Action
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Experience the Difference
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Watch how Bego Chat transforms team collaboration with its
                  intuitive interface and powerful features.
                </p>
                <div className="space-y-6">
                  {[
                    "Real-time messaging with typing indicators and read receipts",
                    "File sharing with preview and collaboration tools",
                    "Voice and video calls with screen sharing capabilities",
                    "Custom notification settings for focused work",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-purple-900 flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 bg-purple-900 hover:bg-indigo-700 text-white">
                  Schedule a Demo
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-slate-900 rounded-lg shadow-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full h-16 w-16 flex items-center justify-center"
                    >
                      <Play className="h-6 w-6 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Carousel */}
        <section id="testimonials" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Loved by Teams of All Sizes
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                See how Bego Chat is transforming workplace communication
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Bego Chat has revolutionized how our distributed team communicates. The interface is clean, the search is powerful, and the integrations are seamless.",
                  author: "Emily Wang",
                  role: "CTO, TechNova",
                  image: "EW",
                },
                {
                  quote:
                    "We switched from three different tools to just Bego Chat. Now all our communications are centralized, searchable, and secure. Game changer for our agency.",
                  author: "Marcus Johnson",
                  role: "Creative Director, Pixel Perfect",
                  image: "MJ",
                },
                {
                  quote:
                    "The security features are exceptional. As a healthcare provider, we needed something that was both HIPAA compliant and easy to use. Bego Chat delivers on both.",
                  author: "Dr. Sarah Chen",
                  role: "Medical Director, HealthFirst",
                  image: "SC",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 text-purple-900 dark:text-indigo-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="inline-block h-5 w-5 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="h-10 w-10 rounded-full bg-purple-900 flex items-center justify-center text-white font-medium">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 px-4 bg-slate-50 dark:bg-slate-900"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
                Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the plan that works best for your team
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$9",
                  description: "Perfect for small teams just getting started",
                  features: [
                    "Up to 10 team members",
                    "5 GB file storage",
                    "Basic integrations",
                    "7 day message history",
                    "Standard support",
                  ],
                  button: "Start Free Trial",
                  highlight: false,
                },
                {
                  name: "Professional",
                  price: "$19",
                  description:
                    "Ideal for growing teams with collaboration needs",
                  features: [
                    "Up to 50 team members",
                    "25 GB file storage",
                    "Advanced integrations",
                    "Unlimited message history",
                    "Priority support",
                    "Advanced security features",
                  ],
                  button: "Get Started",
                  highlight: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For organizations with advanced requirements",
                  features: [
                    "Unlimited team members",
                    "Unlimited file storage",
                    "Custom integrations",
                    "Advanced analytics",
                    "Dedicated support",
                    "SSO and custom security controls",
                    "Compliance certifications",
                  ],
                  button: "Contact Sales",
                  highlight: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`border-0 ${
                    plan.highlight
                      ? "shadow-xl ring-2 ring-purple-900 dark:ring-indigo-500"
                      : "shadow-md"
                  }`}
                >
                  <CardContent className="p-6">
                    {plan.highlight && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-slate-600 dark:text-slate-400 ml-1">
                          /user/month
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-purple-900 dark:text-indigo-400 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.highlight
                          ? "bg-purple-900 hover:bg-indigo-700 text-white"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                      }`}
                    >
                      {plan.button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform how you communicate?
            </h2>

            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
              Join thousands of teams experiencing the future of messaging
              today. No credit card required to get started.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-900 hover:bg-indigo-100 rounded-full px-8"
              >
                Try Bego Chat Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white rounded-full px-8"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="pt-12 pb-6 px-4 bg-slate-900 text-slate-400">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-md bg-purple-900 flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                  <span className="ml-2 font-bold text-xl text-white">
                    Bego Chat
                  </span>
                </div>
                <p className="text-sm mb-4">
                  Modern team communication platform designed for clarity,
                  speed, and security.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Guides & Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      GDPR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                  © {new Date().getFullYear()} Bego Chat. All rights reserved.
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
