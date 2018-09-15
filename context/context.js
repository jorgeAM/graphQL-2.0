const authenticated = require('../middleware/authenticated');

const context = ({ req }) => {
  const user = authenticated.isAuth(req);
  return { user };
};

module.exports = context;
