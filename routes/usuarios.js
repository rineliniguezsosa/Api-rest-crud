const express = require('express')
const router = express.Router()

router.get('/home',async (req,res)=>{
    res.send({"name":"rinel"})
})

module.exports = router;