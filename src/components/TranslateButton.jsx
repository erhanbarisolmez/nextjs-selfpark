'use client'
import { Link, usePathname } from '@/navigation';
import Button from '@mui/joy/Button';
import { Box } from "@mui/material";
import { useEffect, useState } from 'react';
export const TranslateButton = ({ locale }) => {
  const pathname = usePathname();
  const [translate, setTranslate] = useState(); // Başlangıç dilini 'en' olarak ayarlayın
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTranslate(translate);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    setTranslate(translate === 'en' ? 'tr' : 'en'); // Dil toggle edildiğinde state'i güncelle
  };

  return (
    <>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Link href={pathname} locale={"en"}>
          <Button variant='outlined' onClick={toggleLanguage}>
            EN
          </Button>
        </Link>

        <Link href={pathname} locale={"tr"}>
          <Button variant='outlined' onClick={toggleLanguage}>
            TR
          </Button>
        </Link>
      </Box>

    </>
  );
};
