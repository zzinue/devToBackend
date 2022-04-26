const postRouter = require('./posts');
const userRouter = require('./users');
const apiRouter = (app) => {
    app.use('/posts', postRouter);
    app.use('/users', userRouter);
}
module.exports = apiRouter;