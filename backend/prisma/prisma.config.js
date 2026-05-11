// prisma/prisma.config.js
require('dotenv').config();

module.exports = {
  datasource: {
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL, // connection string in .env
    },
  },
  generator: {
    client: {
      provider: 'prisma-client-js',
    },
  },
};