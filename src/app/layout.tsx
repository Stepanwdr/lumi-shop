import React from "react";
import { Providers } from "@/app/Providers/Providers";
import { GlobalStyles } from "@/app/styles/globals";
import {TanStackProvider} from "@/application/tan-stack-provider";
import Image from "next/image";
import {SearchBar} from "@/widgets/SearchBar";
import { LogIn }  from 'lucide-react'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
    <body>
    <TanStackProvider>
      <Providers>
      <GlobalStyles />
        <main className="container">
          <header className={'header'}>
            <Image
              src="/logo.png"
              alt="LUMI logo"
              width={'70'}
              height={'35'}
              className="logo"
              priority
            />
            <SearchBar />
            <LogIn className={'log-in-icon'} />
          </header>
          {children}
        </main>
      </Providers>
    </TanStackProvider>
    </body>
    </html>
  );
}

