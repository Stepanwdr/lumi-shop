import React from "react";
import { Providers } from "@/app/Providers/Providers";
import { GlobalStyles } from "@/app/styles/globals";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>
    <Providers>
      <GlobalStyles />
      {children}
    </Providers>
    </body>
    </html>
  );
}