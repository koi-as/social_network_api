const { User } = require('../models')

module.exports = {
    async getUsers (req, res) {
        try {
            // GET all users 
            const userData = await User.find();

            res.status(200).json(userData); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneUser (req, res) {
        try {
            // GET user by _id
            const userData = await User.findOne({ _id: req.params.userId})

            if (!userdata) {
                res.status(400).json('User not found!');
            };

            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser (req, res) {
        try {
            // POST create new user
            const userData = await User.create(req.body)

            res.status(200).json(userData)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser (req, res) {
        try {
            // PUT update user by _id
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser (req, res) {
        try {
            // DELETE user by _id
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async newFriend (req, res) {
        try {
            // POST a new friend to user friend list
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeFriend (req, res) {
        try {
            // DELETE a friend from user friend list
        } catch (err) {
            res.status(500).json(err);
        }
    }
}