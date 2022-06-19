module.exports = ({ env }) => ({
  proxy: true,
  host: env("HOST"),
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
