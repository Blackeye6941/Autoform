const express = require("express");
const passport = require("passport");
const { Strategy : GoogleStrategy } = require("passport-google-oauth20");

const router = express.Router();

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: process.env.GOOGLE_REDIRECT_URI
}, (accessToken, refreshToken, profile, done) => {
	const user = {profile, accessToken, refreshToken};
	return done(null, user);
}));

passport.serializeUser((user, done) =>
done(null, user));

passport.deserializeUser((obj, done) =>
done(null, obj));

router.get("/google", passport.authenticate("google", {
	scope: ["profile", "email", "https://www.googleapis.com/auth/forms.body"]
}));

router.get("/google/callback", passport.authenticate("google", {
	failureRedirect: "/"
}),(req, res) => {
		res.send("Google Login Successfull");
});

module.exports = router;
