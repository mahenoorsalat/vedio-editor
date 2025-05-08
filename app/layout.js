import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OG Editor | Professional Video Editing",
  description: "Elevate your content with cinematic edits. OG Editor specializes in reels, vlogs, and high-impact visuals that grab attention.",
  keywords: ["video editing", "OG Editor", "reels", "vlogs", "edits", "cinematic", "Rakshit Sharma"],
  authors: [{ name: "Rakshit Sharma" }],
  creator: "Rakshit Sharma",
  openGraph: {
    title: "OG Editor | Professional Video Editing",
    description: "High-quality edits for creators and brands. Transform your raw footage into visual masterpieces.",
    siteName: "OG Editor",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
