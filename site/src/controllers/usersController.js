const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const crypto = require('crypto');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const validationHelper = require('../validators/validatorHelpler')


module.exports = {
  register: (req, res) => {
    res.render("register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
        let betterErrors = validationHelper(errors.mapped())
        // betterErrors.create('image', 'No me gusta el archivo que subiste', req.body.imagen);
        betterErrors.create('email', 'No me gusta el email que elegiste', req.body.email);

        if(!errors.isEmpty()) {
            return res.render('register', { 
                old: req.body, 
                errors: betterErrors 
            });
        }
        usuario = {
          nombre:req.body.nombre,
          apellido: req.body.apellido,
          // imagen: req.file ? req.file.filename : '',
          email:req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          categoriaUsuarioId: 2
      };
      
      db.usuarios
          .create(usuario)
          .then((storedUsuario) => {
              return res.redirect('/');
          })
          .catch(error => console.log(error));
  },
  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res, next) => {
    // Si existe el usuario
    let errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.render('register/login', { 
          old: req.body, 
          errors: errors.mapped() 
      });
  }

  db.usuarios
      .findOne({
          where: { email: req.body.email}
      })
      .then(usuario => {
          // Si el email existe
          console.log(usuario);
          if(usuario) {
              // Y la contraseña es válida
              if(bcrypt.compareSync(req.body.password, usuario.password)) {
                  // Eliminamos la contraseña antes de guardar en sesión
                  userData = usuario.dataValues;
                  delete userData.password
  
                  req.session.usuario = userData;
  
                  // Si pidió que recordar
                  // if (req.body.remember) {
                  //     // Generamos un token seguro, eso para que no pueda entrar cualquiera
                  //     // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
                  //     const token = crypto.randomBytes(64).toString('base64');
  
                  //     // Lo guardamos en nuestra base, para poder chequearlo luego
                  //     user.createToken({userId: user.id, token});
  
                  //     // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
                  //     res.cookie('rememberToken', token, { maxAge: 1000 * 60  * 60 *  24 * 90 });
                  // }
  
                  return res.redirect('/register/profile');
              } else {
                  return res.render('register/login', {
                      errors: {
                          password: {
                              msg: 'La contraseña no coincide con la base.' 
                          }, 
                      },
                      old: req.body
                  }); 
              }
          } else {
              return res.render('register/login', {
                  errors: {
                      email: {
                          msg: 'El email no se encuentra registrado en nuestra base de datos' 
                      },
                  },
                  old: req.body 
              });
          }
      });
  },
  profile: (req, res) => {
    res.render("profile", { usuario });
  },
  logout: async (req, res) => {
    // Borramos el registro de la base de datos si existe
  //   if (req.cookies.remember) {
  //     await db.token.destroy({
  //         where: { token: req.cookies.remember}
  //     })
  // }

  // Destruimos la sesión
  req.session.destroy();
  // Destruimos la cookie de recordar
  // res.cookie('rememberToken', null, { maxAge: -1 });
  // Redirigimos a la home
  res.redirect('/')
}
};
