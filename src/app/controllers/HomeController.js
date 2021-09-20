const Post = require('../models/Post');

class HomeController {
    index(req, res, next) {
        Post.find({})
            .then(posts => {
                // posts = posts.map(post => post.toObject());
                res.render('home', { posts })
            })
            .catch(next);
        // res.render('home');
    }

    login(req, res) {
        res.render('login');
    }
}

module.exports = new HomeController;