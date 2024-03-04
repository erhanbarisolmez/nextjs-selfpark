import { defaultLocale, localePrefix, locales, pathnames } from '@/navigation';
import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  defaultLocale,
  localePrefix,
  locales,
  pathnames
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)

  matcher: [
    '/', 
    '/(en|tr)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};