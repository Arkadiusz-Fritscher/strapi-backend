module.exports = ({ env }) => ({
  proxy: true,
  host: env("MY_HEROKU_URL"),
  port: env("$PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
