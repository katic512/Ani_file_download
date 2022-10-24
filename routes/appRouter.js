const express = require("express");
const router = express.Router();
const fs = require("fs");
const testFolder = "/Users/karthick.narasimhan/github/member-area-root";
// For View
const homeView = (req, res) => {
  fs.readdir(testFolder, (err, files) => {
    console.log(files);
    res.render("home", { files: files });
  });
};

router.get("/file/:fileName", function (req, res) {
  const file = testFolder + "/" + req.params.fileName;
  console.log(file);
  res.download(file); // Set disposition and send it.
});

router.get("/home", homeView);

module.exports = router;
