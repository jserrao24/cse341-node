const sarahRoute = (req, res) => {
  res.send("Hello Sarah");
};

const emilyRoute = (req, res) => {
  res.send("Hello Emily");
};

const hannahRoute = (req, res) => {
  res.send("Hello Hannah");
};

module.exports = {
  sarahRoute,
  emilyRoute,
  hannahRoute,
};