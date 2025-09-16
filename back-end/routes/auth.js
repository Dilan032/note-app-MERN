import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router()

router.post('/register', async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email})
        
        if(existingUser){
            return res.status(401).json({
                success: false,
                message: "User already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, email, password: hashPassword
        });

        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "Account created successfully"
        })

    } catch (error) {
        console.log("Registration error:", error);
        
        return res.status(500).json({
            success: false,
            message: "Error is Adding User"
        })
    }
});


router.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email})
        
        if(!existingUser){
            return res.status(401).json({
                success: false,
                message: "User not exist"
            })
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password)
        if(!checkPassword){
            return res.status(401).json({
                success: false,
                message: "Wrong Password"
            })
        }

        const token = jwt.sign({id: User._id}, "secreteKey",{expiresIn: "5h"});

        return res.status(200).json({
            success: true,
            token,
            user: {name: existingUser.name},
            message: "Login successfully"
        })

    } catch (error) {
        console.log("Error in Login Server:", error);
        
        return res.status(500).json({
            success: false,
            message: "Error in Login Server"
        })
    }
});


export default router;