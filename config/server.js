module.exports = ({ env }) => ({
  host: env.HOST,
  port: env.PORT,
  app: {
    keys: env.array('APP\_KEYS'),
  },
});
