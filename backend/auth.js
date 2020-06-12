const { Router } = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const router = Router();
const bcrypt = require('bcrypt');
const User = require('./models/user');
const UserGoogle = require('./models/userGoogle');
const saltRounds = 10;
const path = require('path');

//
//
//
// Google
//
//

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '925304151582-hpg767mfppsgbhjgjfvtrmogmdnvl9c1.apps.googleusercontent.com',
      clientSecret: 'xe82m36Q-14-TGmWSc-b66JU',
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await UserGoogle.find({ googleId: profile.id });
      if (user.length >= 1) {
        done(null, user);
      } else {
        const newUser = new UserGoogle({
          name: profile.displayName,
          googleId: profile.id,
        });
        await newUser.save();
        await done(null, newUser);
      }
    }
  )
);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    req.session.user = req.session.passport.user[0];
    res.redirect('http://localhost:3000/');
    // res.end();
  }
);
//
//
//
//
//

router.post('/signUp', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    req.session.user = user;
    const session = req.session.user;
    res.json({ status: 200, session: session });
  } catch (err) {
    const errorMess = Object.values(err.keyValue);
    res.json({ status: 400, error: errorMess });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    const session = req.session.user;
    res.json({ status: 200, session: session });
  } else {
    res.json({ status: 400 });
  }
});

router.post('/logout', async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  } else {
    res.json({ status: 200 });
  }
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

module.exports = router;
