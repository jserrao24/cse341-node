const sarahRoute = (req, res) => {
  res.send("Hello Sarah");
};


const emilyRoute = (req, res) => {
  res.send("Hello mily");
};

const hannahRoute = (req, res) => {
    res.send("Hello Hannah");
  };


  module.exports = {
    sarahRoute,
    emilyRoute,
    hannahRoute,
    
  };