const NavigatorLanguagesParser = require("./navigator-languages-parser.js")

console.log(
	NavigatorLanguagesParser.parseLanguages(['en-US', 'enz', 'ru', 'en-USz'], 'en')
	)