require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const boardsRouter = require('./routes/boards');
const pinsRouter = require('./routes/pins');
const commentsRouter = require('./routes/comments');

const app = express();

// For JSON bodies
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/pins', pinsRouter);
app.use('/comments', commentsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send(err);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});