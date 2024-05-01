import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import dynamic from "next/dynamic";

export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Cabins",
  description: "Cabins",
};

const font = Nunito({
  subsets: ["latin"],
});

 async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal/>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        <div className="pb-20 pt-28">
        {children}
        </div>
        </body>
    </html>
  );
}

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false })