
// add language name(locales): i18n.jsx and navigation.ts
// messages : translations in json format (key: value)

import { useTranslations } from "next-intl";

export const useOptions = () => {
  
  const t = useTranslations();

  const useTranslateOptions = () => {
  

    const options = [
      { value: 'en', label: t('english'), src: '/images/uk.png' },
      { value: 'tr', label: t('turkey'), src: '/images/turkey.png' },
      { value: 'fr', label: t('france'), src: '/images/france.png' },
    ];
    return {options};
  }


  return {useTranslateOptions}
}
