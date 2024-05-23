import { CssVarsProvider } from '@mui/joy/styles';
import { Inter } from "next/font/google";


import Header from "@/components/Header";
import { useOptions } from "@/utils/translate/useOptions";
import './globals.css';
import { Providers } from "./providers";
// Inter fontunu yalnızca bir obje olarak içe aktarın
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SELF PARK",
  description: "SELF",
};

export default function RootLayout({ children, params: { locale }}) {
  const {useTranslateOptions} = useOptions();
  const {options} = useTranslateOptions();
  return (
    <html lang={locale} >

      <body className={inter.className}>
        <Providers >
          <CssVarsProvider />
          {/* <Box sx={{
            display:'flex',
            flexDirection: 'row',
            gap: 2,
            justifyContent: 'flex-end',
            mt:3

          }}>
            <TranslateAndTheme translateOptions={options}></TranslateAndTheme>
          </Box> */}

          <Header translateOptions={options}  locale = {locale} />

            {children}
    
        </Providers>
      </body>


    </html>

  );
}
