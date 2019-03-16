const router = require("express").Router();

router.get("/login",(req,res)=>{
    res.json({msg:"working"});
});

module.exports = router;