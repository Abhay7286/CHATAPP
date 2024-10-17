import User from "../models/user.model.js";

export const signup = async(req, res) =>{
    try {
        const {fullname,username,password,confirmpassword,gender} = req.body;

        if(password!==confirmpassword){
            return res.status(400).json({error:"passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        
        const BoyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=${username}`
        const GirlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender === "male" ? BoyProfilePic : GirlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
        
    } catch (error) {
        console.log("error in signup controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
};

export const login = (req, res) =>{
    console.log("loginUser")
    res.send("signupuser")
};

export const logout = (req, res) =>{
    console.log("logoutUser")
    res.send("signupuser")
};