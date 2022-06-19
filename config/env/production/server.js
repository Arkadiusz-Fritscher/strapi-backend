module.exports = ({ env }) => ({
  proxy: true,
  host: env("MY_HEROKU_URL"),
  port: $PORT,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
