import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "SSOSC",
  description:
    " Join the Srinivas Students Open Source Community (SSOSC) – a vibrant tech hub for students passionate about open-source development, collaboration, and innovation. Explore real-world projects, participate in hackathons, attend workshops, and grow your skills in an inclusive environment. Whether you're a beginner or a seasoned developer, SSOSC is the place to learn, contribute, and build your future in tech.",
    images: [
      {
        url: '/SSOSC.LOGO-WHITE.png',
        width: 1200,
        height: 630,
        alt: 'SSOSC',
      },
    ]
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[url('/SSOSC_BG.png')]  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



