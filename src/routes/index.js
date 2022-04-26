const postRouter = require('./posts');
const apiRouter = (app) => {
    app.use('/posts', postRouter);
}
module.exports = apiRouter;