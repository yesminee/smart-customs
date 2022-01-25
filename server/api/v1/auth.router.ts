import { Router, Request } from "express";
import user from "../../models/user.model";

const router = Router();

router.post("/",async(req,res)=>{
    const foundUser= await user.findOne({email:req.body.email,password:req.body.password});
    
    console.log(foundUser);
    if (!foundUser) res.status(400).send();
    else{
        res.status(200).send(foundUser);
    }
})

export default router;
