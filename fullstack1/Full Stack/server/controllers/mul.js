const multer = require("multer");
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads");
    console.log("dumbu");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
    console.log(req,file,"sjhsh")
  },
});

// Create multer upload instance
console.log("dumbu raani")
const upload = multer({
  storage: storage
});
module.exports = upload