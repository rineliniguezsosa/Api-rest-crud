const express = require('express')
const router = express.Router()

router.get('/home',(req,res)=>{
    res.send({"name":"rinel"})
})

module.exports = router;