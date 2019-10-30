module.exports = {
    createAccountPage: (req, res) => {
        res.render('create-acc.ejs', {
            title: 'Welcome to Socker | Add a new player'
            ,message: ''
        });
    },
    createAccount: (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;

        let query = "INSERT INTO `accounts` (username, password, email) VALUES ('" +
            username + "', '" + password + "', '" + email + "')";
        db.query(query, (err, result) => {
            if (err) {
                Lỗi
            }
            res.redirect('/');
        });
    },
};