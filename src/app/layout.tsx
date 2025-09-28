import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "World Friends Blog - Connect Cultures Through Stories | International Friendships & Cultural Exchange",
    template: "%s | World Friends Blog"
  },
  description: "Discover amazing stories about international friendships, cultural exchange, and language learning. Join our global community of world friends sharing experiences from around the globe.",
  keywords: [
    "international friends",
    "cultural exchange", 
    "language learning",
    "travel stories",
    "global community",
    "world friends",
    "cross-cultural communication",
    "international relationships",
    "cultural diversity",
    "global connections"
  ],
  authors: [{ name: "World Friends Team" }],
  creator: "World Friends",
  publisher: "World Friends Blog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app',
  },
  openGraph: {
    title: "World Friends Blog - Connect Cultures Through Stories",
    description: "Discover amazing stories about international friendships, cultural exchange, and language learning from our global community.",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app',
    siteName: "World Friends Blog",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'World Friends Blog - Connect Cultures Through Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Friends Blog - Connect Cultures Through Stories',
    description: 'Discover amazing stories about international friendships and cultural exchange.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'application-name': 'World Friends Blog',
    'apple-mobile-web-app-title': 'World Friends',
    'msapplication-TileColor': '#818CF8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
