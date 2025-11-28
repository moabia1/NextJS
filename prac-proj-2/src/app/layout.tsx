import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";


export const metadata: Metadata = {
  title: "First FullStack using nextJS",
  description: "Ultimate Backend Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
