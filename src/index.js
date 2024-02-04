const express = require('express');

const usersRouter = require('./routes/users');
const boardsRouter = require('./routes/boards');
const pinsRouter = require('./routes/pins');
const commentsRouter = require('./routes/comments');

const app = express();

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/pins', pinsRouter);
app.use('/comments', commentsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});