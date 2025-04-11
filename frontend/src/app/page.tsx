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
} from "lucide-react";
import Navbar from "@/components/custom/common/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Connect Instantly with{" "}
                <span className="text-primary dark:text-blue-400">
                  Bego Chat
                </span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
                Experience seamless conversations with friends, teams, and
                communities in real-time. Fast, secure, and designed for modern
                communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-700 text-white"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="flex-1 order-first md:order-last">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur-lg opacity-[0.03] "></div>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-slate-800">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                          JD
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                            John Doe
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Online
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0"></div>
                        <div className="bg-white dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-xs">
                          <p className="text-sm">
                            Hey there! How's the new project coming along?
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none max-w-xs">
                          <p className="text-sm">
                            Just wrapped up the design phase! I'll share the
                            mockups in our team channel.
                          </p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-600 flex-shrink-0"></div>
                      </div>

                      <div className="pt-3">
                        <Input
                          placeholder="Type your message..."
                          className="bg-white dark:bg-slate-800"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Bego Chat?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A modern messaging platform built for speed, security, and
              seamless collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Lightning Fast"
              description="Experience real-time messaging with minimal latency. Connect instantly across devices."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Bank-Level Security"
              description="End-to-end encryption keeps your conversations private and secure at all times."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Team Collaboration"
              description="Create channels, share files, and organize your workspaces for maximum productivity."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
              title="Rich Messaging"
              description="Send text, images, files, code snippets, and more with our advanced formatting tools."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
              title="Reliable Delivery"
              description="Never miss a message with our guaranteed delivery system and offline support."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Cross-Platform"
              description="Access Bego Chat from any device - desktop, mobile, or web browser."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by Teams Everywhere
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See what our users are saying about Bego Chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Bego Chat transformed how our remote team collaborates. The interface is intuitive and the reliability is unmatched."
              author="Sarah Johnson"
              role="Product Manager"
            />
            <TestimonialCard
              quote="As a developer, I appreciate the attention to detail in the code sharing features. It's made our technical discussions much more productive."
              author="Alex Chen"
              role="Senior Developer"
            />
            <TestimonialCard
              quote="The security features give us peace of mind when discussing sensitive client information. Bego Chat is now essential to our workflow."
              author="Michael Rodriguez"
              role="Legal Consultant"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your communications?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Bego Chat to collaborate
            seamlessly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Create Free Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-blue-50"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-slate-900 text-slate-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p>© {new Date().getFullYear()} Bego Chat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </CardContent>
    </Card>
  );
}

// Component for testimonial cards
function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4 text-blue-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11L7 14L4 11M4 11V7M4 11H7M20 11L17 14L14 11M14 11V7M14 11H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
          "{quote}"
        </p>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {author}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
