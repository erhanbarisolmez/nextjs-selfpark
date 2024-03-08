'use client'
import { usePathname } from '@/navigation';
import { useEffect, useState } from 'react';
import SelectCustomOption from './SelectCustomOptions';
export const TranslateButton = ({ locale, translateOptions}) => {
  const pathname = usePathname();
  const [translate, setTranslate] = useState(locale); // Başlangıç dilini 'en' olarak ayarlayın
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTranslate(translate);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    setTranslate(translate === 'en' ? 'fr' : 'en'); // Dil toggle edildiğinde state'i güncelle
  };

  return (
    <>
{/* 
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

        <Link href={pathname} locale={"fr"}>
          <Button variant='outlined' onClick={toggleLanguage}>
            FR
          </Button>
        </Link>
      </Box> */}

        <SelectCustomOption 
            options={translateOptions}
        />

    </>
  );
};


