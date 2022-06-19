module.exports = ({ env }) => ({
  proxy: true,
  host: env("HEROKU_URL"),
  port: env("PORT") || 5000,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
