import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antojitos El Zapopan | Authentic Mexican Food",
  description: "Antojitos El Zapopan serves authentic Mexican cuisine in Winston-Salem, NC. Visit us for tacos, burritos, quesadillas and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ebGaramond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
