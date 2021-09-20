const registerRouter = require('./registerRouter');
const homeRouter = require('./homeRouter');
const loginRouter = require('./loginRouter');

function router(app) {

    app.use('/register', registerRouter);

    app.use('/login', loginRouter);

    app.use('/', homeRouter);
    
}

module.exports = router;
