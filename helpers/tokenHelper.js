const jwt = require('jsonwebtoken');

const createToken = (payload, expiresIn) => {
  const token = process.env.ACCESS_TOKEN_SECRET_KEY;

  if (!token) {
    throw new Error('Secret key is missing.');
  }

  return jwt.sign(payload, token, { expiresIn });
};

module.exports = createToken;
