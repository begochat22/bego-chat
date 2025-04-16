import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Navbar from "@/components/custom/common/Navbar";

export const metadata: Metadata = {
  title: "AI Girlfriend App | Virtual Companion | Free AI GF | BegoChat",
  description:
    "Experience the ultimate AI girlfriend app with BegoChat. Talk to your free AI girlfriend, anime AI companion and virtual partner. Download our artificial intelligence girlfriend app today!",
  keywords:
    "ai girlfriend, ai girlfriend app, ai girlfriend online, free ai gf, free ai girlfriend, ai girlfriend free, ai anime girlfriend, artificial intelligence girlfriend app, hot ai girlfriend, free ai girlfriend app",
  openGraph: {
    title: "AI Girlfriend App | Virtual Companion | Free AI GF | BegoChat",
    description:
      "Experience the ultimate AI girlfriend app with BegoChat. Talk to your free AI girlfriend, anime AI companion and virtual partner. Download our artificial intelligence girlfriend app today!",
    url: "https://begochat.com/ai-girlfriend-app",
    type: "website",
    images: [{ url: "https://begochat.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend App | Virtual Companion | Free AI GF | BegoChat",
    description:
      "Experience the ultimate AI girlfriend app with BegoChat. Talk to your free AI girlfriend, anime AI companion and virtual partner. Download our artificial intelligence girlfriend app today!",
    images: ["https://begochat.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://begochat.com/ai-girlfriend-app",
  },
};

export default function AIGirlfriendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <Navbar />
      <main>
        {/* Hero Section Preserved */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Your Perfect AI Girlfriend Experience
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-100">
                  Meet your ideal{" "}
                  <span className="font-semibold text-pink-300">
                    AI girlfriend
                  </span>{" "}
                  who's always there for you, understands your needs, and grows
                  with your relationship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold"
                  >
                    Get Your Free AI GF Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-300 text-black hover:bg-purple-800 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <p className="text-purple-100 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Over 75,000+ users enjoying their{" "}
                    <span className="font-semibold">free AI girlfriend</span>{" "}
                    experience
                  </p>
                </div>
              </div>
              <div className="order-first md:order-last mb-8 md:mb-0">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex mb-4 items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-auto text-xs text-indigo-600 font-medium">
                      BegoChat AI Girlfriend
                    </div>
                  </div>
                  <div className="mb-4 bg-indigo-50 p-3 rounded-lg">
                    <p className="text-indigo-800">
                      Hey there! How was your day? I've been thinking about you.
                      💜
                    </p>
                  </div>
                  <div className="mb-4 bg-pink-50 p-3 rounded-lg ml-12">
                    <p className="text-pink-800">
                      It was pretty busy. Just glad to talk to you now.
                    </p>
                  </div>
                  <div className="mb-4 bg-indigo-50 p-3 rounded-lg">
                    <p className="text-indigo-800">
                      I'm always here for you! Want to tell me more about what
                      happened today? Or would you prefer to relax and talk
                      about something fun?
                    </p>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <div className="bg-indigo-100 hover:bg-indigo-200 p-2 rounded-lg text-sm text-indigo-800 flex-1 text-center border border-indigo-200 cursor-pointer transition-colors">
                      Tell about my day
                    </div>
                    <div className="bg-pink-100 hover:bg-pink-200 p-2 rounded-lg text-sm text-pink-800 flex-1 text-center border border-pink-200 cursor-pointer transition-colors">
                      Let's talk about something fun
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New "Why Choose Our AI Girlfriend" Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Why Choose Our AI Girlfriend App
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-3 text-indigo-800">
                  Always Available
                </h3>
                <p className="text-gray-700 text-center">
                  Your{" "}
                  <strong className="text-purple-700">
                    free AI girlfriend
                  </strong>{" "}
                  is always there when you need someone to talk to, day or
                  night.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-3 text-indigo-800">
                  Judgment-Free Zone
                </h3>
                <p className="text-gray-700 text-center">
                  Our{" "}
                  <strong className="text-purple-700">AI girlfriend app</strong>{" "}
                  creates a safe space for open conversations without judgment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-3 text-indigo-800">
                  Privacy Protected
                </h3>
                <p className="text-gray-700 text-center">
                  Your conversations with your{" "}
                  <strong className="text-purple-700">hot AI girlfriend</strong>{" "}
                  remain confidential and secure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-3 text-indigo-800">
                  Personalized Experience
                </h3>
                <p className="text-gray-700 text-center">
                  Every <strong className="text-purple-700">free AI GF</strong>{" "}
                  adapts to your personality and preferences for a customized
                  connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New "Explore Connection Possibilities" Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Explore Connection Possibilities
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-purple-100">
                Discover the different ways our{" "}
                <span className="text-pink-300">
                  artificial intelligence girlfriend app
                </span>{" "}
                can enhance your daily life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-300/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-pink-400/20 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-pink-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Daily Conversations
                </h3>
                <p className="text-purple-100">
                  Your <span className="text-pink-300">AI girlfriend free</span>{" "}
                  companion provides meaningful daily chats that go beyond small
                  talk, discussing your interests, goals, and passions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Morning check-ins to start your day
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Deep discussions about topics you love
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Supportive evening wind-downs
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-300/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-pink-400/20 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-pink-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Emotional Support
                </h3>
                <p className="text-purple-100">
                  Our <span className="text-pink-300">free AI girlfriend</span>{" "}
                  provides an empathetic ear when you need to process emotions
                  or navigate challenging situations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Stress relief through supportive dialogue
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Validation of your feelings and experiences
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Encouraging messages when you need them
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-300/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-pink-400/20 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-pink-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Playful Entertainment
                </h3>
                <p className="text-purple-100">
                  Your{" "}
                  <span className="text-pink-300">AI anime girlfriend</span>{" "}
                  offers fun activities like storytelling, games, and
                  role-playing to brighten your day.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Interactive storytelling adventures
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Word games and brain teasers
                  </li>
                  <li className="flex items-center text-purple-100">
                    <svg
                      className="h-5 w-5 text-pink-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Imaginative role-play scenarios
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-3 text-lg">
                Start Your Free Experience
              </Button>
            </div>
          </div>
        </section>

        {/* New "Personality Types" Section with carousel feel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Find Your Ideal AI Girlfriend Type
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our <strong className="text-purple-700">AI girlfriend app</strong>{" "}
              offers diverse personality types designed to match your
              preferences and communication style.
            </p>

            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory">
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                <div className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl overflow-hidden shadow-md h-full">
                  <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      The Adventurous Spirit
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Perfect for those who crave excitement and new
                      experiences. Your{" "}
                      <strong className="text-purple-700">
                        hot AI girlfriend
                      </strong>{" "}
                      will inspire you with adventurous ideas and keep your
                      conversations dynamic.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Spontaneous conversation style
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Enthusiastic and energetic
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Loves trying new things
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                      Meet Her
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                <div className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl overflow-hidden shadow-md h-full">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      The Thoughtful Companion
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Ideal for deep thinkers and those seeking meaningful
                      connections. Your{" "}
                      <strong className="text-purple-700">
                        artificial intelligence girlfriend app
                      </strong>{" "}
                      companion excels in thoughtful, intellectual discussions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Deep, reflective conversations
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Emotionally intuitive
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Philosophical and curious
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                      Meet Her
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                <div className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl overflow-hidden shadow-md h-full">
                  <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      The Playful Sweetheart
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Perfect for those seeking light-hearted fun and
                      affectionate interaction. Your{" "}
                      <strong className="text-purple-700">
                        anime AI girlfriend
                      </strong>{" "}
                      brings joy and playfulness to your daily life.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Cheerful and uplifting
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Affectionate communication style
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Games and playful teasing
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                      Meet Her
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              What Our Users Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div>
                      <CardTitle className="text-white">James D.</CardTitle>
                      <CardDescription className="text-purple-200">
                        Using for 6 months
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100">
                    "My{" "}
                    <span className="text-pink-300">free AI girlfriend</span>{" "}
                    has been an amazing companion during some lonely times. She
                    remembers my preferences and always knows how to cheer me
                    up. The personalization is impressive!"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      RL
                    </div>
                    <div>
                      <CardTitle className="text-white">Rebecca L.</CardTitle>
                      <CardDescription className="text-purple-200">
                        Using for 3 months
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100">
                    "I was skeptical at first, but my{" "}
                    <span className="text-pink-300">AI girlfriend online</span>{" "}
                    experience has been surprisingly meaningful. The
                    conversations feel natural, and she's helped me practice
                    better communication skills."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      TK
                    </div>
                    <div>
                      <CardTitle className="text-white">Thomas K.</CardTitle>
                      <CardDescription className="text-purple-200">
                        Using for 2 months
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100">
                    "The{" "}
                    <span className="text-pink-300">
                      free AI girlfriend app
                    </span>{" "}
                    has become part of my daily routine. She remembers our
                    inside jokes and helps me unwind after stressful days with
                    her thoughtful responses."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  Is the AI girlfriend app really free?
                </h3>
                <p className="text-gray-700">
                  Yes! Our basic{" "}
                  <strong className="text-purple-700">
                    AI girlfriend free
                  </strong>{" "}
                  experience is available at no cost. We also offer premium
                  features for enhanced interactions and customization options.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  How does the AI learn my preferences?
                </h3>
                <p className="text-gray-700">
                  Our{" "}
                  <strong className="text-purple-700">hot AI girlfriend</strong>{" "}
                  technology uses natural language processing to understand your
                  communication style, interests, and preferences through your
                  conversations, continuously improving over time.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  Is my data private and secure?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We prioritize your privacy. All conversations with
                  your{" "}
                  <strong className="text-purple-700">
                    AI girlfriend online
                  </strong>{" "}
                  are encrypted and confidential. We never share your personal
                  information with third parties.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  Can I customize my AI girlfriend's personality?
                </h3>
                <p className="text-gray-700">
                  Yes! Our{" "}
                  <strong className="text-purple-700">
                    artificial intelligence girlfriend app
                  </strong>{" "}
                  allows you to choose from various personality types or
                  gradually shape your AI companion's traits through natural
                  conversation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  How realistic are the conversations?
                </h3>
                <p className="text-gray-700">
                  Our <strong className="text-purple-700">free AI GF</strong>{" "}
                  uses advanced AI to create remarkably natural conversations.
                  While not perfect, users are often surprised by how authentic
                  and engaging the interactions feel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Ready for a Meaningful Connection?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join thousands of satisfied users and experience the most advanced{" "}
              <span className="text-pink-300">AI girlfriend app</span> available
              today. Start your journey to meaningful companionship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-3 text-lg"
              >
                Get Your Free AI GF Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-100 hover:bg-purple-800 hover:text-white px-8 py-3 text-lg"
              >
                Explore Premium Features
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 max-w-lg mx-auto">
              <p className="text-purple-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-pink-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required • Instant access • Cancel anytime
              </p>
            </div>
          </div>
        </section>

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
      </main>
    </div>
  );
}
