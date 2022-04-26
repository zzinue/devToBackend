const Post = require('../../models/posts').model

const getAll = async(req, res) => {
    return await Post.find({}).exec()
}
const create = async(postData) => {
    const { title, image, content, dateCreated, tags } = postData
    const newPost = new Post({
        title,
        image,
        content,
        dateCreated,
        tags
    })
    return await newPost.save()
}

module.exports = {
    getAll,
    create
}