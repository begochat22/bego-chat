import type { Metadata } from "next";
import "./globals.css";
import ConfigProvider from "@/provider/ConfigProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/custom/common/Navbar";
import ENV from "@/config/ENV";

export const metadata: Metadata = {
  title: "Bego Chat",
  description: "Bego Chat is platform to add blogs and articles ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider>{children}</ConfigProvider>
        {ENV.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={ENV.GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
