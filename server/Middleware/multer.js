const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create the destination directory if it doesn't exist
const destinationDirectory = path.join(__dirname,'..', 'public', 'images');

if (!fs.existsSync(destinationDirectory)) {
  fs.mkdirSync(destinationDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationDirectory);
  },


  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });



module.exports = {upload};
