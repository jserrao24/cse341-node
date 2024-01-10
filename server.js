const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'));
app.use('/sarah', require('./controllers/lesson1').sarahRoute);
app.use('/emily', require('./controllers/lesson1').emilyRoute);
app.use('/hannah', require('./controllers/lesson1').hannahRoute);

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});