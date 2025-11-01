const { GoogleGenAI } = require("@google/genai");
const { formSchema } = require("../utils/formSchema.js");
require("dotenv").config({ path: __dirname + "/../.env" });


const ai = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY
});

if(!ai){
	console.log("No API key");
}

(async function generateForm(prompt){
	const uprompt = "Create a form for collecting feedback from students after completing a programming course. Include sections for personal info, course feedback, and instructor evaluation. Add jump logic to skip advanced feedback if the student didn’t complete advanced modules";
	const res = await ai.models.generateContent({
		model:"gemini-2.5-flash",
		contents:`Create a input for Google Form api in structured JSON format based on the following description:${uprompt}.The form should includee:Multiple sections (each with a title and description) and Optional jump logic (go to specific section based on answer) based on user prompt. The JSON should strictly follow the response schema provided. Dont provide any additional fields out of context and the response schema should be strictly followed.`,
		config: {
      			responseMimeType: "application/json",
      			responseSchema: formSchema, 
		},
	});
	console.log(res.text);
})();
