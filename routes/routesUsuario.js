const express = require("express");
const router = express.Router();
const API = require('../controllers/apiUsuario');
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },

});

let upload = multer({
    storage: storage
}).single('image');

// router.get("/", (req,res) => {
//     res.send("hola");
// });
router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostByID);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;