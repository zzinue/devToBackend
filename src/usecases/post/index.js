const Post = require('../../models/posts').model

const getAll = async(req, res) => {
    return await Post.find({}).exec()
}
const getById = async(id) => {
    const post = await Post.findById(id).exec()
    return post
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

const patch = async(id, postData) => {
    return await Post.findByIdAndUpdate(id, {...postData }, { new: true }).exec()
}

const del = async(id) => {
    return await Post.findByIdAndDelete(id).exec()
}

module.exports = {
    getAll,
    create,
    patch,
    del,
    getById
}