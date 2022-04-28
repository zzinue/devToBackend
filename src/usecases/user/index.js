const User = require('../../models/users').model;
const encrypt = require('../../lib/encrypt');


const getAll = async() => {
    return await User.find({}).exec();
}
const getByEmail = async(email) => {
    return await User.findOne({ email }).exec()
}

const authenticate = async(user, password) => {
    const hash = user.password
    return await encrypt.veryfyPassword(password, hash)
}
const create = async(firstName, lastName, email, password) => {
    const hash = await encrypt.hashPassword(password);
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hash
    })
    return await newUser.save();
}
const update = async(id, userData) => {
    const { firstName, lastName, email, password } = userData;
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password }, { new: true }).exec()
    return updatedUser
}
module.exports = {
    getAll,
    create,
    update,
    authenticate,
    getByEmail


}