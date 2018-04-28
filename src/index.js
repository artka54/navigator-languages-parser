const NavigatorLanguagesParser = require("./navigator-languages-parser.js")

console.log(
	NavigatorLanguagesParser.parseLanguages(['en-US', 'en', 'ru', 'en-USz'], 'en')
	)