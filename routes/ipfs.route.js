var router = require("express").Router();
const controller = require("../controller/controller.js");

router.get("/", controller.data);
 
router.post('/uploadFile', controller.upload);
 
router.get('/download/:ID',controller.download)
module.exports  = router;