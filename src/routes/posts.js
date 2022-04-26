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
module.exports = router;