const express = require('express');
const app = express();
const lesson1Controller =  require ('./controllers/lesson1Controller');

// Took out annoynmous function
app.get('/', lesson1Controller.hannahRoute);

/*app.get('/hannah', (req, res) => {
  res.send("Hello Hannah");
});
*/


const port = 3000
 
app.listen(process.env.PORT || port);
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
