const express = require("express");
const htmlRoutes = require("./routes/htmlroutes");
const app = express();
const PORT = 3001;
const path = require("path");

app.use(express.static("public"));
app.use("/", htmlRoutes);
app.listen(PORT, () => console.log(`Serving static asset routes on port ${PORT}!`));
