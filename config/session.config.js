
const session = require("express-session");
const MongoStore = require("connect-mongo");

/* eslint-disable no-undef */
module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        sameSite: true,
        httpOnly: false,
        maxAge: 60000000, 
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 60 * 60 * 24,
      }),
    })
  );
};