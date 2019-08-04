const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hiya! there');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log('Listening on port ' + process.env.SERVER_PORT);
});
