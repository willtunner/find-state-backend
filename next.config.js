module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/:path*', // Substitua pelo URL correto da sua API NestJS
        },
      ];
    },
  };
  