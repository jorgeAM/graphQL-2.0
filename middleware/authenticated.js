const authService = require('../services/jwt');

function isAuth(req) {
  if (!req.headers.authorization) {
    throw new Error('No tienes la cabecera de autenticación');
  }else {
    let token = req.headers.authorization;
    token = token.replace('Bearer ', '');
    try {
      const user = authService.decode(token);
      return user;
    } catch (e) {
      throw new Error('Token inválido');
    }
  }
}

module.exports = {
  isAuth,
};
