import "./globals.css";
import type { Metadata } from "next";
// (Optional: if you added custom fonts via next/font)
// import { GeistSans, GeistMono } from "geist/font";

export const metadata: Metadata = {
  title: "Banuso Hamzah Ademola | Data Science Portfolio",
  description:
    "Portfolio of Banuso Hamzah Ademola — Senior Data Scientist & AI/ML Engineer with 5+ years of experience, ML, DL, and MLOps certifications.",
  openGraph: {
    title: "Banuso Hamzah Ademola | Data Science Portfolio",
    description:
      "Data Scientist & AI/ML Engineer with 5+ years of experience — explore my projects, certifications, and impact.",
    url: "https://portfolio-hadex.vercel.app",
    siteName: "Banuso Hamzah Ademola",
    images: [
      {
        url: "/preview.png", // optional preview image saved in /public
        width: 1200,
        height: 630,
        alt: "Banuso Hamzah Ademola Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banuso Hamzah Ademola | Data Science Portfolio",
    description:
      "Turning complex data into actionable intelligence with AI, ML, and analytics.",
    images: ["/preview.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          // Replace with your fonts if you configured them
          "antialiased bg-[#0b1020] text-white"
        }
      >
        {children}
      </body>
    </html>
  );
}
