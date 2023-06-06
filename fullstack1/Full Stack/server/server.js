const express = require("express");
const bodyParser = require("body-parser")
const app = express()
app.use(express.json());
const multer = require("multer")
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const cors = require("cors")
const postsRouter = require('./postsRouter')
const mongoose = require("mongoose")
app.use('/Images',express.static('./Images'))
app.use(cors())

const CONNECTION_URL =  "mongodb+srv://seshukothapalli302:seshu123@cluster0.ghfp63j.mongodb.net/blogs?retryWrites=true&w=majority"

 function connect() {
  
     mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>console.log("db connet"))
    
  }
connect();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// Create multer upload instance
const upload = multer({ storage: storage });

// Serve the HTML form


// Handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // File was uploaded successfully
  res.send('File uploaded!');
});

app.use('/posts',postsRouter)
// app.use('/posts',(req,res)=>{
//     res.send("jsh")
// })


app.listen(1100, () => {
    console.log("port startr");
  });
