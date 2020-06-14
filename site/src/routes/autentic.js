router.get("/login", authController.showLogin);
router.post("/login", [
    check("email")
        .custom(function (value) {
            let usersJSON = fs.readFileSync(
                path.resolve(__dirname, "../data/Users.json")
            );
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == value) {
                    return true;
                }
            }
            return false;
        })
        .withMessage("Email no registrado"),

    authController.login,
]);

//LOGOUT
router.get("/logout", authController.logout);
