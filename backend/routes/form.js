const express = require("express");
const { createForm } = require("../controllers/formController.js");

const router = express.Router();

function ensureAuthenticated(req, res, next){
	if(req.user && req.user.accessToken) return next();
	return res.status(401).json({ error : "User not authenticated"});
}

router.post("/create", ensureAuthenticated, createForm);

module.exports = router();


