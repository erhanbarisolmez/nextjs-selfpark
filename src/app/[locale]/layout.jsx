
import { ThemeButton } from "@/components/ThemeButton";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "./providers";
// Inter fontunu yalnızca bir obje olarak içe aktarın
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <header>
            <nav>
              <ul>
                <li>
                  {/* Locale bilgisini göndermek için Link içindeki href'e locale ekleyin */}
                  <Link href={{ pathname: '/login' }}>
                    Home
                  </Link>
                  <ThemeButton />
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
