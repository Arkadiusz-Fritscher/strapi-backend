module.exports = ({ env }) => ({
  proxy: false,
  host: env("HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
