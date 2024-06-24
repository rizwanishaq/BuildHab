import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import {dark, light} from "@clerk/themes"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Construction Uber",
  description: "Construction Uber",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider appearance={{baseTheme: light}}>
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">
          <div className="flex items-start justify-center min-h-screen">
            <div className="mt-20">
              {children}
            </div>
          </div>
        </main>
        </body>
    </html>
      </ClerkProvider>
  );
}
