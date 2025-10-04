import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { Footer, Header } from "./components";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--montserrat-sans-serif",
  subsets: ["cyrillic"],
});

const raleway = Raleway({
  variable: "--raleway-sans-serif",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Pricing plans",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.className}`}>
      <body className={`${raleway.variable} antialiased`}>
        <StoreProvider>
          <div className="m-[0_auto] flex max-w-[1920px] flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)] md:rounded-l-[60px] md:rounded-r-[60px]">
            <Header />

            <div className="xs:pb-[30px] flex items-center justify-center pr-4 pb-[20px] pl-4 md:pb-[150px]">
              <div className="xs:gap-[24px] flex w-[var(--content-box)] flex-col gap-[22px] md:gap-[66px]">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
