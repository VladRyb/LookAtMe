const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const authRouter = require('./auth');
const path = require('path');
const userRouter = require('./auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/finalProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    store: new FileStore(),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

app.post('/', async (req, res) => {
  const session = req.session.user;
  res.json({ session: session });
});

app.use('/', authRouter);
app.use('/user', userRouter);


app.listen(4000, () => {
  console.log('Starting Port 4000');
});
