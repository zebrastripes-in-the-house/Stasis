import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { shadcn } from "@clerk/themes";

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Stasis",
  description:
    "Software Engineering Project.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} ${geistMono.variable}`}>
        <ClerkProvider
          appearance={{
            theme: shadcn,
          }}
        >
          <ConvexClientProvider>
            <EdgeStoreProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="zotion-theme-2"
              >
                <ToasterProvider />
                <ModalProvider />
                {children}
              </ThemeProvider>
            </EdgeStoreProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
