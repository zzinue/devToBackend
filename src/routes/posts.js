const express = require('express');
const post = require('../usecases/post');
const { authHandler } = require('../middlewares/authHandlers');

const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const posts = await post.getAll();
        res.json({
            sucess: true,
            payload: posts
        })
    } catch (err) {
        next(err)
    }
})
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const payload = await post.getById(id);
    res.json({ success: true, payload })
})
router.post("/", async(req, res, next) => {
    try {
        const { title, image, content, dateCreated, tags } = req.body
        const postCreated = await post.create({
            title,
            image,
            content,
            dateCreated,
            tags
        })
        res.json({
            sucess: true,
            message: "Post created successfully",
            payload: postCreated
        })
    } catch (err) {
        next(err)
    }

})
router.patch("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const postUpdated = await post.patch(id, {...req.body });
        res.json({
            success: true,
            message: `post ${id} updated`,
            payload: postUpdated
        })
    } catch (error) {
        next(error)
    }
})
router.delete("/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const postDeleted = await post.del(id)
        res.json({
            sucess: true,
            message: ` "Post ${id} deleted"`,
            payload: postDeleted
        })
    } catch (err) {
        next(err)
    }
})
module.exports = router;