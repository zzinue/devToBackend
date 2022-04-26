const express = require('express');
const user = require('../usecases/user');


const router = express.Router();

router.get("/", async(req, res) => {
    const users = await user.getAll();
    res.json({
        success: true,
        payload: users
    });
})

router.post("/", async(req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const userCreated = await user.create(firstName, lastName, email, password);
        res.json({
            succes: true,
            message: "User created",
            payload: userCreated
        });
    } catch (error) {
        next(error);
    }
})
router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;
        const userUpdated = await user.update(id, { firstName, lastName, email, password })
        res.json({
            succes: true,
            message: `user ${id} updated`,
            payload: userUpdated
        });
    } catch (error) {
        next(error)
    }
})
module.exports = router;