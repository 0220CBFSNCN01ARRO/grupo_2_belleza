const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt');

usersPath = path.join(__dirname, '../Data/Users.json');

// Leer usuarios en Json
function getUsers() {
    let userContent = fs.readFileSync(usersPath, "utf8")
    return userContent != '' ? JSON.parse(userContent) : []
}
// Buscar usuario por id
function getUser(id){
    let usuarios = getUsers();
    return usuarios.find(user => user.id == id)
}
// Buscar que el email exista
function getUserByEmail(email){
    let usuarios = getUsers();
    return usuarios.find(user => user.email == email)
}
// Creación de usuario
function generateId() {
    let usuarios = getUsers();
    if(usuarios.length){
        let ids = usuarios.map((user) => user.id); 
        return Math.max(...ids) + 1;
    } else {
        return 1;
    }
}
// Guardar usuario en Json
function guardarUsuario(usuario){
    let usuarios = getUsers()
    usuarios.push(usuario)
    fs.writeFileSync(usersPath,JSON.stringify(usuarios,null,' '))
}

module.exports = {
    register: (req,res) => {
        res.render('register')
    },
    store: (req,res,next) => {
        delete req.body.pass2
        req.body.pass = bcrypt.hashSync(req.body.pass,10);
        let userData = {
            id: generateId(),
            ...req.body,
            avatar: req.files[0].filename
        }
        guardarUsuario(userData);
        res.redirect('/')
    },
    login: (req,res) => {
        res.render('login');
    },
    processLogin:(req, res,next) => {
        let usuario = getUserByEmail(req.body.email);
        if(usuario != undefined ){    
            if(bcrypt.compareSync(req.body.pass,usuario.pass)){
                res.redirect('/')
            } else {
                res.send('La contraseña no es correcta')
            }
        } else {
            res.send('Ese usuario no existe')
        }
    },
    // profile:(req,res,next)=> {  
    //     let usuario = getUser(req.params.id)
    //     if(usuario != undefined ){
    //         res.render('profile',{ usuario })
    //     } else {
    //         res.send("Ese usuario no existe");
    //     }
    // }
    
}
