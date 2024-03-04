
import {
  Pathnames,
  createLocalizedPathnamesNavigation
} from 'next-intl/navigation';
 
export const locales = ['en', 'tr'];
export const defaultLocale= "en";
export const localePrefix = 'always'; // Default
 
export const pathnames = {
  '/login' : {
    en: '/login',
    tr: '/giris'
   },
 '/dashboard' : {
  en: '/dashboard',
  tr: '/gosterge-paneli'
 }
} satisfies Pathnames<typeof locales>;

 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});