class RegisterController {

    index(req, res) {
        res.render('register');
    }

    create(req, res) {
        console.log(req.body);
        // res.redirect('/login');
    }

}

module.exports = new RegisterController;