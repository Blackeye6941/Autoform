const llmService = require("../services/llmService.js");
const googleFormService = require("../services/googleFormService.js");
const validateJson = require("../utils/validateJson.js");

exports.createForm = async (req, res) => {
	try {
		const { prompt } = req.body;

		if(!prompt) return res.status(400).json({ error : "No Prompt"});
		const formData = await llmService.generateForm(prompt);
		const valid = await validateJson(formData);
		if(!valid) return res.status(400).json({error : "Generated form json not valid"});
		const formLink = await googleFormService.createFormWithOAuth(formData, req.user.accessToken);
		res.json({success: true, formLink});
	} catch (err) {
		return res.json("Error");
	}
}
