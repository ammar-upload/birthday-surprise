// app/layout.js
import { Geist, Geist_Mono, Poppins, Varela_Round } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const varela = Varela_Round({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "HBD",
  description: "Happiest Birthday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${varela.variable} antialiased text-white font-varela`}
      >
      
        {children}
      </body>
    </html>
  );
}
