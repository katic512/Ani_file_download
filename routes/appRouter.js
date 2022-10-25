const express = require("express");
const router = express.Router();
const fs = require("fs");
const testFolder =
  "/Users/karthick.narasimhan/Desktop/Anitha/Node_file_download/node_modules/parseurl";
// For View
const homeView = (req, res) => {
  var fileDetails = [];
  res.render("home", { fileDetails: fileDetails });
};

router.get("/file/:fileName", function (req, res) {
  const file = testFolder + "/" + req.params.fileName;
  console.log(file);
  res.download(file); // Set disposition and send it.
});

router.post("/fileSearch", async (req, res) => {
  console.log(req.body);
  const searchFileName = req.body.fileName;
  const fileList = await fs.promises.readdir(testFolder, (err, files) => {
    return files;
  });
  const filterdFileList = fileList.filter(
    (fileName) => fileName.indexOf(searchFileName) > -1
  );
  console.log("printing file list from promise");
  console.log(filterdFileList);

  var fileDetails = await getFileDetails(filterdFileList);
  console.log("printing file details");
  console.log(fileDetails);

  res.json(fileDetails);
});

router.get("/files", async (req, res) => {
  console.log(req.body);
  const fileList = await fs.promises.readdir(testFolder, (err, files) => {
    //console.log(err);
    //console.log(files);
    return files;
  });
  console.log("printing file list from promise");
  console.log(fileList);
  var fileDetails = await getFileDetails(fileList);
  console.log("printing file details");
  console.log(fileDetails);
  res.json(fileDetails);
});

const getFileDetails = async function (files) {
  var fileDetails = [];
  for (var i = 0; i < 20 && i < files.length; i++) {
    const stats = await fs.promises.stat(testFolder + "/" + files[i]);
    var data = { file_name: files[i], modified_date: stats.mtime };
    fileDetails.push(data);
  }
  return fileDetails;
};

router.get("/home", homeView);

module.exports = router;
