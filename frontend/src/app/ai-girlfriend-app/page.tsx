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

export const metadata: Metadata = {
  title: "AI Girlfriend App | Virtual Companion | BegoChat",
  description:
    "Experience the ultimate AI girlfriend app with BegoChat. Talk to your free AI girlfriend, anime AI companion and virtual partner. Download our artificial intelligence girlfriend app today!",
  keywords:
    "ai girlfriend, ai girlfriend app, ai girlfriend online, free ai gf, free ai girlfriend, ai girlfriend free, ai anime girlfriend, artificial intelligence girlfriend app, hot ai girlfriend, free ai girlfriend app",
  openGraph: {
    title: "AI Girlfriend App | Virtual Companion | BegoChat",
    description:
      "Experience the ultimate AI girlfriend app with BegoChat. Talk to your free AI girlfriend, anime AI companion and virtual partner. Download our artificial intelligence girlfriend app today!",
    url: "https://begochat.com/ai-girlfriend-app",
    type: "website",
    images: [{ url: "https://begochat.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend App | Virtual Companion | BegoChat",
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
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Your Perfect AI Girlfriend Experience
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
          Connect with an intelligent, responsive AI companion who's always
          there for you
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Get Started Free
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Image
              src="/api/placeholder/800/600"
              alt="AI girlfriend interface example"
              width={800}
              height={600}
              className="object-contain"
            /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Personalized Companion</CardTitle>
            <CardDescription>
              Customize your AI girlfriend's personality and interests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Create a unique companion that matches your preferences and
              understands your needs. Our AI learns from your conversations to
              provide a more personalized experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Always Available</CardTitle>
            <CardDescription>
              Your AI girlfriend is there whenever you need her
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              No matter the time or day, your AI companion is ready to chat,
              offer support, or just keep you company when you're feeling
              lonely.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anime Girlfriend Option</CardTitle>
            <CardDescription>
              Choose from various anime-inspired characters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Fans of anime can select from multiple anime-style girlfriends
              with distinctive personalities, appearances, and backstories.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engaging Conversations</CardTitle>
            <CardDescription>Natural dialogue with advanced AI</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Experience realistic conversations powered by cutting-edge natural
              language processing. Our AI remembers past chats and responds
              thoughtfully.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Free to Start</CardTitle>
            <CardDescription>
              Begin your AI relationship without any cost
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Try our free AI girlfriend features with no commitment. Upgrade
              anytime to access premium features and enhanced interaction
              capabilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Private & Secure</CardTitle>
            <CardDescription>
              Your conversations remain confidential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We value your privacy. All chats with your AI girlfriend are
              encrypted and never shared with third parties.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "My AI girlfriend has been a great companion during late nights
                when I'm working. The conversations feel surprisingly real and
                she remembers details about my life."
              </p>
              <div className="mt-4 font-semibold">- Michael T.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "I was skeptical at first, but the anime girlfriend feature is
                really well done. The personality is consistent and the AI
                responds in a way that matches her character."
              </p>
              <div className="mt-4 font-semibold">- Samantha K.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is the AI girlfriend app really free?
            </h3>
            <p>
              Yes, you can start using our basic AI girlfriend features
              completely free. Premium features are available with subscription
              plans.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              How realistic is the AI girlfriend?
            </h3>
            <p>
              Our AI uses advanced natural language processing to create
              engaging and realistic conversations. While not perfect, many
              users are surprised by how natural the interactions feel.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I customize how my AI girlfriend looks?
            </h3>
            <p>
              Yes, both standard and anime AI girlfriends can be customized with
              different appearances, outfits, and styles to match your
              preferences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is my data private when using the app?
            </h3>
            <p>
              Absolutely. We take privacy seriously and encrypt all
              conversations. Your interactions remain confidential and are not
              shared with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for a New Kind of Relationship?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Experience the companionship of an AI girlfriend who's always there
          for you, understands your needs, and evolves with your relationship.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
        >
          Get Your Free AI Girlfriend Now
        </Button>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                BegoChat
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Your AI companion solution
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/help">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} BegoChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
