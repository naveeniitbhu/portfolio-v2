import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naveen Garg | Full Stack Developer",
  description: "Portfolio of Naveen Garg, a full-stack developer specializing in React and Node.js. Explore my work across MNCs and startups, showcasing web development expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
