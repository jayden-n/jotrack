import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

//  ================== "NOT FOUND" MIDDLEWARE  ==================
app.use("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});

app.listen(8000, () => {
	console.log("server is running!!!....");
});
