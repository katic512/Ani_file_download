const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));

app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", require("./routes/appRouter"));
