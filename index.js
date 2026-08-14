const express = require("express");
const app = express();
const path = require("path");

// Serve the public folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 4000, function () {
    console.log("Your Node.js server is running on port 4000");
});