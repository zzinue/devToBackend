const express = require('express');
const post = require('../usecases/post');

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
router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const { title, image, content, dateCreated, tags } = req.body
        const postUpdated = await post.update(id, { title, image, content, dateCreated, tags })
        res.json({
            sucess: true,
            message: ` "Post ${id} updated"`,
            payload: postUpdated
        })
    } catch (err) {
        next(err)
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