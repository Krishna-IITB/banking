import Sidebar from "@/components/Sidebar";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'krishna', lastName: 'singh'}
  // The code snippet you provided is a part of a React component, likely within a Next.js application. This code is responsible for rendering the HTML structure of a web page, applying specific font styles to the body, and rendering children elements inside the body
  return (
<main className="flex h-screen w-full font-inter" >
    <Sidebar user ={loggedIn} />
    <div className="flex size-full flex-col">
       <div className="root-layout">
         <Image src="/icons/logo.svg" 
        width= {30}
        height= {30}
        alt = "logo" /> 
        <div>
          <MobileNav user= {loggedIn} />
        </div>
      </div>
    {children}
    </div>
   </main>
  );
}
