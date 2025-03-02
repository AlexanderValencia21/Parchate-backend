module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://parchate-back.onrender.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '240e355045561f4352111e7667cec448'),
    },
  },
});