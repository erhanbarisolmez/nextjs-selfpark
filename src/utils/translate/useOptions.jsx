
// add language name(locales): i18n.jsx and navigation.ts
// messages : translations in json format (key: value)

import { useTranslations } from "next-intl";

export const useOptions = () => {

  const useTranslateOptions = () => {
    const t = useTranslations();

    const options = [
      { value: '1', label: t('english'), src: '/images/uk.png' },
      { value: '2', label: t('turkey'), src: '/images/turkey.png' },
      { value: '3', label: t('france'), src: '/images/france.png' },
    ];
    return {
      options
    };
  }


  return {
    useTranslateOptions,

  }
}
