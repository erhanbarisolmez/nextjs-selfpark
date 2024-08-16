import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin(
  './src/i18n.jsx',
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://192.168.4.88:3000", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
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
        source:'/api/v1/auth/loginUser',
        destination:`http://192.168.4.88:8080/api/v1/auth/authenticate`
      },
      {
        source:'/api/v1/park/update_park',
        destination:`http://192.168.4.88:8080/api/v1/parkInfo/update`
      },
      {
        source: '/:locale/api/routes/authenticate/authenticate',
        destination: 'http://192.168.4.88:8080/api/v1/auth/authenticate',
      }

    ]
  }


};

export default withNextIntl(nextConfig);
