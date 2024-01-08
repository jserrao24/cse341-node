const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello John");
});

const port = 3000
 
app.listen(process.env.port || port);
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
