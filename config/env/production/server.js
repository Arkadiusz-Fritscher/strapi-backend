module.exports = ({ env }) => ({
  proxy: true,
  host: env("HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
