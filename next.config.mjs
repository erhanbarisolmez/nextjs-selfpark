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
        permanent: true,
        
      },
    ];
  },
  async rewrites(){
    return[
      {
        source:'/api/v1/Auth/loginUser',
        destination:`http://192.168.4.88:8080/api/v1/auth/authenticate`
      }
    ]
  }


};

export default withNextIntl(nextConfig);
