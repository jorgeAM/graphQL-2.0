const config = require('../config/config');
const jwt = require('jsonwebtoken');

function encode(user) {
  let payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '24h' });
}

function decode(token) {
  return jwt.verify(token, config.JWT_SECRET);
}

module.exports = {
  encode,
  decode,
};
