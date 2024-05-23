import createNextIntlPlugin from 'next-intl/plugin';
 

const withNextIntl = createNextIntlPlugin(
  './src/i18n.jsx',
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/login',
        permanent: false,
      },

    ];
  },

  
 


};

export default withNextIntl(nextConfig);
