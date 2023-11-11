const express = require('express');
const router = express.Router();
const users = require("../models/userSecama")

// router.get('/', (req,res)=>{
//     console.log("connect");
// })
// router.use(express.json());



//post api route
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, age, email, mobile, work, address, Description } = req.body;

    if (!name || !age || !email || !mobile || !work || !address || !Description) {
        res.status(422).json("Please fill the data")
    }

    try {

        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(422).json("this user is already oresent");
        } else {
            const adduser = new users({
                name, age, email, mobile, work, address, Description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error)
    }
})



//get api route
router.get("/getdata", async (req, res) => {
    try {

        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);

    } catch (error) {
        res.status(422).json(error)
    }
})


//getuser by id route
router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userId = await users.findById({ _id: id })
        console.log(userId);
        res.status(201).json(userId)

    } catch (error) {
        res.status(422).json(error)
    }
})


// update user api route
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error)
    }
})


//delete userdata api
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const Deleteuser = await users.findByIdAndDelete({ _id: id })
        console.log(Deleteuser);
        res.status(201).json(Deleteuser);

    } catch (error) {
        res.status(422).json(error)
    }
})
module.exports = router