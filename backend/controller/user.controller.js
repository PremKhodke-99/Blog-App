const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.send({
                success: false,
                message: 'User Already Exist'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        console.log(newUser);
        await newUser.save();

        return res.status(201).send({
            success: true,
            message: 'New User Registered'
        });
    } catch (error) {
        console.error('Internal server error', error.message);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            return res.status(200).send({
                success: true,
                message: 'Login Successful',
                user,
            });
        } else {
            return res.send({
                success: false,
                message: 'Wrong Password',
            });
        }

    } catch (error) {
        console.error('Internal server error', error.message);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

module.exports = {
    register,
    login
}