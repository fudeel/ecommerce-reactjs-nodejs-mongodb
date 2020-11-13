import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc   Auth the user & get token
// @route  POST /api/user/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    console.log('req: ', req)

    // find one document and we find by email
    const user = await User.findOne({ email })

    console.log('user: ', user);

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Wrong email or password')
    }
})



// @desc   Register new user
// @route  POST /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    console.log('req: ', req)

    // find one document and we find by email
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = User.create({
        name, email, password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// @desc   Get user profile
// @route  GET /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {

    res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})





export { authUser, registerUser, getUserProfile }