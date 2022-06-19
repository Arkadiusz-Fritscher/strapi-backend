module.exports = ({ env }) => ({
  proxy: true,
  host: env("HEROKU_URL"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
