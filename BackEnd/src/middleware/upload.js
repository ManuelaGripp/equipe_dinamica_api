const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const path = require("path");


let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
      const fileType = file.originalname.split('.').at(-1)    
      const fileName = req.params.id+`.${fileType}`

    cb(null, fileName);
  },
});

let uploadFile = multer({
  storage: storage,
});

module.exports = { uploadFile };
