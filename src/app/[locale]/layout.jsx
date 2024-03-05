import { locales } from "@/navigation";
import { Inter } from "next/font/google";

import { ThemeButton } from "@/components/ThemeButton";
import { TranslateButton } from "@/components/TranslateButton";
import { Providers } from "./providers";
// Inter fontunu yalnızca bir obje olarak içe aktarın
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// `generateStaticParams` fonksiyonunu düzeltmek için eklemeler
export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } })); // Dizideki her öğenin "params" alanını döndürün
}

export default function RootLayout({ children, params: { locale } }) {
  return (

    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          
          <ThemeButton />
          <TranslateButton />
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
