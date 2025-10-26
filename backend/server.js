const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave:false,
	saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req,res) => {
	res.send("<h1>Autoform Backend</h1>");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})
