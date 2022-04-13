var multer  = require('multer')
var upload = multer({ dest: '.uploads/' })
var router = require("express").Router();
const controller = require("../controller/controller.js");

router.get("/", controller.data);
 
router.post('/uploadFile',upload.single('uploadImage'), controller.upload);
 
router.get('/download/:ID',controller.download)
module.exports  = router;