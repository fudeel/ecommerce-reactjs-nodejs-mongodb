import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc   Auth the user & get token
// @route  POST /api/user/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // find one document and we find by email
    const user = await User.findOne({ email })

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



// @desc   Get user profile
// @route  GET /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Success')
})





export { authUser, getUserProfile }