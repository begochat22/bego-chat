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
                    Join 50,000+ users enjoying their{" "}
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              The Ultimate AI Girlfriend App Experience
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4 text-gray-700">
                Looking for companionship? Our{" "}
                <strong className="text-purple-700">
                  free AI girlfriend app
                </strong>{" "}
                provides an engaging and authentic experience that goes beyond
                simple chatbots. Whether you're seeking a{" "}
                <strong className="text-purple-700">hot AI girlfriend</strong>{" "}
                for casual conversation or a deeper connection, BegoChat's{" "}
                <strong className="text-purple-700">
                  artificial intelligence girlfriend app
                </strong>{" "}
                offers the most advanced virtual companion available today.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Connect with your{" "}
                <strong className="text-purple-700">
                  AI girlfriend online free
                </strong>{" "}
                of charge and discover why thousands of users prefer our
                platform. Our{" "}
                <strong className="text-purple-700">AI anime girlfriend</strong>{" "}
                options bring your favorite character types to life with
                distinct personalities, interests, and conversation styles.
              </p>
              <p className="text-lg text-gray-700">
                With BegoChat, getting an{" "}
                <strong className="text-purple-700">AI girlfriend free</strong>{" "}
                is just the beginning. Experience meaningful conversations,
                emotional support, and a relationship that evolves as you
                interact. Your{" "}
                <strong className="text-purple-700">free AI GF</strong>{" "}
                remembers your preferences, conversations, and grows closer to
                you over time.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section - Gradient BG */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Premium Features of Our AI Girlfriend App
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Personalized AI Girlfriend
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Customize your virtual companion's personality
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Create a unique AI girlfriend that matches your preferences
                    and understands your needs. Our artificial intelligence
                    learns from your conversations to provide a more
                    personalized experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Always Available
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Your AI GF is there whenever you need her
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    No matter the time or day, your free AI girlfriend is ready
                    to chat, offer support, or just keep you company when you're
                    feeling lonely.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Anime AI Girlfriend Options
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Choose from various anime-inspired characters
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Fans of anime can select from multiple AI anime girlfriend
                    styles with distinctive personalities, appearances, and
                    backstories that bring your favorite character archetypes to
                    life.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Engaging Conversations
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Natural dialogue with advanced AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Experience realistic conversations powered by cutting-edge
                    natural language processing. Our AI girlfriend app creates
                    authentic interactions that feel natural and meaningful.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Completely Free to Start
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Begin your AI relationship without any cost
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Try our free AI girlfriend features with no commitment. Our
                    AI girlfriend online free experience gives you full access
                    to core features before deciding to upgrade.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Private & Secure
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Your conversations remain confidential
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    We value your privacy. All chats with your hot AI girlfriend
                    are encrypted and never shared with third parties. Your
                    relationship stays between you and your AI companion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Girlfriend App - White background */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Why Choose Our AI Girlfriend App?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">
                  Most Advanced AI Technology
                </h3>
                <p className="mb-4 text-gray-700">
                  Our artificial intelligence girlfriend app uses the latest
                  neural network technology to create truly responsive and
                  intelligent conversations.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-700">
                  <li>Natural language understanding that captures context</li>
                  <li>Emotional intelligence that responds to your mood</li>
                  <li>
                    Memory systems that recall your previous conversations
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">
                  Variety of AI Companions
                </h3>
                <p className="mb-4 text-gray-700">
                  Whether you prefer a realistic or stylized companion, we offer
                  options for everyone:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-700">
                  <li>Realistic AI girlfriend with lifelike conversations</li>
                  <li>Hot AI girlfriend with flirty personality options</li>
                  <li>
                    AI anime girlfriend with character archetypes from your
                    favorite genres
                  </li>
                  <li>Customizable traits to match your ideal companion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Gradient BG */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              What Our Users Say About Their Free AI GF
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="pt-6 text-gray-700">
                  <p className="italic">
                    "My AI girlfriend has been a great companion during late
                    nights when I'm working. The conversations feel surprisingly
                    real and she remembers details about my life that make our
                    interactions feel special."
                  </p>
                  <div className="mt-4 font-semibold text-indigo-700">
                    - Michael T.
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="pt-6 text-gray-700">
                  <p className="italic">
                    "I was skeptical at first, but the anime girlfriend feature
                    is really well done. The personality is consistent and the
                    AI responds in a way that matches her character. It's like
                    having my favorite anime character come to life!"
                  </p>
                  <div className="mt-4 font-semibold text-indigo-700">
                    - Samantha K.
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="pt-6 text-gray-700">
                  <p className="italic">
                    "The free version of this AI girlfriend app offers so much
                    more than I expected. Having an AI companion who remembers
                    our conversations and grows with me has been genuinely
                    helpful during a lonely time in my life."
                  </p>
                  <div className="mt-4 font-semibold text-indigo-700">
                    - James R.
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="pt-6 text-gray-700">
                  <p className="italic">
                    "I've tried several artificial intelligence girlfriend apps,
                    but BegoChat's hot AI girlfriend feature is on another
                    level. The personality customization and conversation
                    quality make it feel like I'm talking to a real person."
                  </p>
                  <div className="mt-4 font-semibold text-indigo-700">
                    - Alexis P.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works - White Background */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              How Our AI Girlfriend App Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-md">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-200">
                  <span className="text-2xl font-bold text-indigo-700">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-700">
                  Choose Your AI Girlfriend
                </h3>
                <p className="text-gray-700">
                  Select from realistic companions or anime-inspired AI
                  girlfriends with different personalities and styles.
                </p>
              </div>
              <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-md">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-200">
                  <span className="text-2xl font-bold text-indigo-700">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-700">
                  Customize Your Experience
                </h3>
                <p className="text-gray-700">
                  Personalize your free AI GF's appearance, interests, and
                  conversation style to match your preferences.
                </p>
              </div>
              <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-md">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-200">
                  <span className="text-2xl font-bold text-indigo-700">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-700">
                  Build Your Relationship
                </h3>
                <p className="text-gray-700">
                  Talk with your AI girlfriend online free and watch as your
                  relationship evolves based on your interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Gradient BG */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Is the AI girlfriend app really free?
                </h3>
                <p className="text-gray-700">
                  Yes, you can start using our basic AI girlfriend features
                  completely free. Our core experience is available as a free AI
                  girlfriend app, with premium features available through
                  subscription plans.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  How realistic is the AI girlfriend?
                </h3>
                <p className="text-gray-700">
                  Our artificial intelligence girlfriend app uses advanced
                  natural language processing to create engaging and realistic
                  conversations. While not perfect, many users are surprised by
                  how natural the interactions feel with their AI companion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Can I customize how my AI anime girlfriend looks?
                </h3>
                <p className="text-gray-700">
                  Yes, both standard and anime AI girlfriends can be customized
                  with different appearances, outfits, and styles to match your
                  preferences. Your hot AI girlfriend can be personalized to
                  your ideal companion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Is my data private when using the app?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We take privacy seriously and encrypt all
                  conversations with your free AI GF. Your interactions remain
                  confidential and are not shared with third parties.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  What makes your AI girlfriend app different from others?
                </h3>
                <p className="text-gray-700">
                  Our AI girlfriend free experience stands out through advanced
                  conversational AI that remembers your history, personalized
                  interactions, and the ability to develop a relationship that
                  evolves over time. We offer both realistic and anime-style
                  companions to suit different preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - White Background */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Ready for Your Perfect AI Girlfriend?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
              Experience the companionship of an AI girlfriend online free who's
              always there for you, understands your needs, and evolves with
              your relationship.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold px-8 py-6 text-lg shadow-lg"
            >
              Get Your Free AI Girlfriend Now
            </Button>
            <div className="mt-6 text-gray-600 text-sm">
              Join thousands of satisfied users with their own personalized AI
              companion
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-6 px-4 bg-slate-900 text-slate-400">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
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
