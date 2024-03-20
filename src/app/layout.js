import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/app/ui/globals.css";
import StyledComponentsRegistry from "./lib/registry";

import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <main
            style={{
              margin: "4.375rem 0 4.375rem",
            }}
          >
            <div
              style={{
                width: "97.5%",
                margin: "auto",
              }}
            >
              {children}
            </div>
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
