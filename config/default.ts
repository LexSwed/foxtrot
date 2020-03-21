export default {
  port: parseInt(process.env.PORT || '3000', 10),
  isDev: true,
  isProd: false,
  auth: {
    tokenName: 'x-foxtrot-auth-token',
    tokenExpiration: 3 * 24 * 60 * 60,
    secret: process.env.JWT_SECRET || 'super-random-string'
  }
};
