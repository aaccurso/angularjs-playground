var express = require("express"),
  app = express(),
  passport = require("passport"),
  TokenStrategy = require('passport-token').Strategy,
  strategyOptions = {
    usernameHeader: 'x-access-email',
    tokenHeader:    'x-access-token',
    usernameField:  'email'
  };

var users = [
  { email: "alpha@gmail.com", token: "Alpha", role: "alpha" }, 
  { email: "beta@gmail.com", token: "Beta", role: "beta" }
];

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.bodyParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

passport.use(new TokenStrategy(strategyOptions,
    function (email, token, done) {

      var user;
      
      users.forEach( function(u) {
        if ( u.email === email ) {
          user = u;
        }
      });

      if (!user) {
        return done(null, false);
      }
      // User is not authenticated (not logged in).
      // Unauthorized (401).
      if (user.token !== token) {
        return done(null, false);
      }
      // User is authenticated (logged in).
      return done(null, user);
    })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var requiresRole = function (role) {
  return [
    passport.authenticate('token'),
    function (req, res, next){
      if ( role === 'public' ? true : ( req.user && req.user.role === role ) )
        next();
      else
        // Access is forbidden.
        res.send(403, "Forbidden");
    }
  ];
}

app.get('/alpha', 
  requiresRole('alpha'),
  function(req, res) {
    res.json(req.user);
  });

app.get('/beta', 
  requiresRole('beta'),
  function(req, res) {
    res.json(req.user);
  });

app.get('/public1', 
  passport.authenticate('token'),
  function(req, res) {
    res.send("passport.authenticate('token')");
  });

app.get('/public2',
  requiresRole('public'),
  function(req, res) {
    res.send("requiresRole('public')");
});

app.listen(3000);
console.log('Listening on port 3000');
