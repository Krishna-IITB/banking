
export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  // The code snippet you provided is a part of a React component, likely within a Next.js application. This code is responsible for rendering the HTML structure of a web page, applying specific font styles to the body, and rendering children elements inside the body
  return (
   <main>
    SIDEBAR
    {children}
   </main>
  );
}
