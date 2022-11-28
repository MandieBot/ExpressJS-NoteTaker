const path = require("path");
const router = require("express").Router();

//first arg will be URL portion, second arg will be the thing that happens when URL is visited
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;
