import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalLoader from "./GlobalLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orisco Energy | Powering Human Progress",
  description: "Orisco Energy is a leading energy company working to meet the world's growing energy needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalLoader>
          <Header />
          <main>{children}</main>
          <Footer />
        </GlobalLoader>
      </body>
    </html>
  );
}
