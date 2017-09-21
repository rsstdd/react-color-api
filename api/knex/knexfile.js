module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react_color_api_dev',
    seeds: {
      directory: './seeds/dev',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
