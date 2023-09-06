import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Waves Cinema",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-saira">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
