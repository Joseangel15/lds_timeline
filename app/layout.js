import localFont from "next/font/local";
import "./globals.css";
import HeaderLayout from "./components/header/layout";
import FooterLayout from "./components/footer/layout";
import FeatherIcons from "./components/feather_icons/layout.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LDS History Timeline",
  description: "LDS History Timeline aplication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FeatherIcons />
        <HeaderLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
