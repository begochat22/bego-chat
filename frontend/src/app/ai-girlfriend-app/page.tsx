// app/ai-girlfriend-app/page.tsx
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

// SEO metadata using the new Next.js metadata API
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
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Your Perfect AI Girlfriend Experience
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
          Connect with an intelligent, responsive{" "}
          <span className="font-semibold">AI girlfriend</span> who's always
          there for you
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Get Your Free AI GF Now
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        {/* <div className="relative w-full  mx-auto h-auto rounded-xl overflow-hidden"> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900" /> */}
        {/* <div className="absolute inset-0 flex items-center justify-center"> */}
        <Image
          src="https://res.cloudinary.com/dujgngjro/image/upload/v1743948807/bd7d08be-303d-4d92-a184-3685d8a96264_y1troq.png"
          alt="AI girlfriend interface example"
          width={800}
          height={900}
          className=" w-[60%] mx-auto h-auto object-cover rounded-xl shadow-lg"
        />
        {/* </div> */}
        {/* </div> */}
      </section>

      {/* Introduction Section with Keywords */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          The Ultimate AI Girlfriend App Experience
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            Looking for companionship? Our{" "}
            <strong>free AI girlfriend app</strong> provides an engaging and
            authentic experience that goes beyond simple chatbots. Whether
            you're seeking a <strong>hot AI girlfriend</strong> for casual
            conversation or a deeper connection, BegoChat's{" "}
            <strong>artificial intelligence girlfriend app</strong> offers the
            most advanced virtual companion available today.
          </p>
          <p className="text-lg mb-4">
            Connect with your <strong>AI girlfriend online free</strong> of
            charge and discover why thousands of users prefer our platform. Our{" "}
            <strong>AI anime girlfriend</strong> options bring your favorite
            character types to life with distinct personalities, interests, and
            conversation styles.
          </p>
          <p className="text-lg">
            With BegoChat, getting an <strong>AI girlfriend free</strong> is
            just the beginning. Experience meaningful conversations, emotional
            support, and a relationship that evolves as you interact. Your{" "}
            <strong>free AI GF</strong> remembers your preferences,
            conversations, and grows closer to you over time.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Personalized AI Girlfriend</CardTitle>
            <CardDescription>
              Customize your virtual companion's personality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Create a unique AI girlfriend that matches your preferences and
              understands your needs. Our artificial intelligence learns from
              your conversations to provide a more personalized experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Always Available</CardTitle>
            <CardDescription>
              Your AI GF is there whenever you need her
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              No matter the time or day, your free AI girlfriend is ready to
              chat, offer support, or just keep you company when you're feeling
              lonely.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anime AI Girlfriend Options</CardTitle>
            <CardDescription>
              Choose from various anime-inspired characters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Fans of anime can select from multiple AI anime girlfriend styles
              with distinctive personalities, appearances, and backstories that
              bring your favorite character archetypes to life.
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
              language processing. Our AI girlfriend app creates authentic
              interactions that feel natural and meaningful.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completely Free to Start</CardTitle>
            <CardDescription>
              Begin your AI relationship without any cost
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Try our free AI girlfriend features with no commitment. Our AI
              girlfriend online free experience gives you full access to core
              features before deciding to upgrade.
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
              We value your privacy. All chats with your hot AI girlfriend are
              encrypted and never shared with third parties. Your relationship
              stays between you and your AI companion.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Our AI Girlfriend App */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our AI Girlfriend App?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">
              Most Advanced AI Technology
            </h3>
            <p className="mb-4">
              Our artificial intelligence girlfriend app uses the latest neural
              network technology to create truly responsive and intelligent
              conversations.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Natural language understanding that captures context</li>
              <li>Emotional intelligence that responds to your mood</li>
              <li>Memory systems that recall your previous conversations</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Variety of AI Companions</h3>
            <p className="mb-4">
              Whether you prefer a realistic or stylized companion, we offer
              options for everyone:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Realistic AI girlfriend with lifelike conversations</li>
              <li>Hot AI girlfriend with flirty personality options</li>
              <li>
                AI anime girlfriend with character archetypes from your favorite
                genres
              </li>
              <li>Customizable traits to match your ideal companion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say About Their Free AI GF
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "My AI girlfriend has been a great companion during late nights
                when I'm working. The conversations feel surprisingly real and
                she remembers details about my life that make our interactions
                feel special."
              </p>
              <div className="mt-4 font-semibold">- Michael T.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "I was skeptical at first, but the anime girlfriend feature is
                really well done. The personality is consistent and the AI
                responds in a way that matches her character. It's like having
                my favorite anime character come to life!"
              </p>
              <div className="mt-4 font-semibold">- Samantha K.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "The free version of this AI girlfriend app offers so much more
                than I expected. Having an AI companion who remembers our
                conversations and grows with me has been genuinely helpful
                during a lonely time in my life."
              </p>
              <div className="mt-4 font-semibold">- James R.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic">
                "I've tried several artificial intelligence girlfriend apps, but
                BegoChat's hot AI girlfriend feature is on another level. The
                personality customization and conversation quality make it feel
                like I'm talking to a real person."
              </p>
              <div className="mt-4 font-semibold">- Alexis P.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How Our AI Girlfriend App Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Choose Your AI Girlfriend
            </h3>
            <p>
              Select from realistic companions or anime-inspired AI girlfriends
              with different personalities and styles.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Customize Your Experience
            </h3>
            <p>
              Personalize your free AI GF's appearance, interests, and
              conversation style to match your preferences.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Build Your Relationship</h3>
            <p>
              Talk with your AI girlfriend online free and watch as your
              relationship evolves based on your interactions.
            </p>
          </div>
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
              completely free. Our core experience is available as a free AI
              girlfriend app, with premium features available through
              subscription plans.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              How realistic is the AI girlfriend?
            </h3>
            <p>
              Our artificial intelligence girlfriend app uses advanced natural
              language processing to create engaging and realistic
              conversations. While not perfect, many users are surprised by how
              natural the interactions feel with their AI companion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I customize how my AI anime girlfriend looks?
            </h3>
            <p>
              Yes, both standard and anime AI girlfriends can be customized with
              different appearances, outfits, and styles to match your
              preferences. Your hot AI girlfriend can be personalized to your
              ideal companion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is my data private when using the app?
            </h3>
            <p>
              Absolutely. We take privacy seriously and encrypt all
              conversations with your free AI GF. Your interactions remain
              confidential and are not shared with third parties.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              What makes your AI girlfriend app different from others?
            </h3>
            <p>
              Our AI girlfriend free experience stands out through advanced
              conversational AI that remembers your history, personalized
              interactions, and the ability to develop a relationship that
              evolves over time. We offer both realistic and anime-style
              companions to suit different preferences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Your Perfect AI Girlfriend?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Experience the companionship of an AI girlfriend online free who's
          always there for you, understands your needs, and evolves with your
          relationship.
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
