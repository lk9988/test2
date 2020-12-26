const express = require("express");
const app = express();

const PORT = process.env.PORT || 4321;

app.get("/", function (req, res) {
	res.send("hello world");
});
app.get("/test", function (req, res) {
	res.send("hello world test ! ");
});

// app.listen(PORT);
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
