const postRouter = require('./posts');
const userRouter = require('./users');
const authRouter = require('./auth');
const apiRouter = (app) => {
    app.use('/posts', postRouter);
    app.use('/users', userRouter);
    app.use('/auth', authRouter)
}
module.exports = apiRouter;