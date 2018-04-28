const NavigatorLanguagesParser = require("./navigator-languages-parser.js")

console.log(
	NavigatorLanguagesParser.parseLanguages(['en', 'en-US', 'ru', 'en-USz'], 'en')
	)

console.log(navigator)