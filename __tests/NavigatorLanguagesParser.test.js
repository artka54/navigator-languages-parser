const NavigatorLanguagesParser = require("../src/navigator-languages-parser.js")

const setUserPreferredLocales = (preferredLocales) => {
	Object.defineProperty(window.navigator, 'languages', {value: preferredLocales, configurable: true})
}

const setUserPreferredLocalesFallback = (preferredLocale) => {
	Object.defineProperty(window.navigator, 'language', {value: preferredLocale, configurable: true})
}

describe("Matching locales to user's preffered locales", () => {

	beforeEach(() => {
	   setUserPreferredLocales(['en-US', 'en']);
	});

	test("if locale matches against user's preferred locales", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['en'])).toEqual('en')
	});

	test("if locale matches against user's preferred locales if asked locales are more than one", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de', 'en-US', 'es'])).toEqual('en-US')
	});

	test("when locale is not in the user's preferred list but default locale is indicated then return default locale", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'], 'en')).toEqual('en')
	});

	test("when asked locale is not in the user's preferred list and no default locale is indicated it should return undefined", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'])).toEqual(undefined)
	});

});


describe("Matching locales to user's preffered locales. Using fallback -> navigator.language instead of navigator.languages", () => {

	beforeEach(() => {
	   setUserPreferredLocales(undefined)
	   setUserPreferredLocalesFallback('ko')
	});

	test("if locale matches against user's preferred locales", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko'])).toEqual('ko')
	});

	test("if locale matches against user's preferred locales if asked locales are more than one", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko', 'en-US', 'es'])).toEqual('ko')
	});

	test("when locale is not in the user's preferred list but default locale is indicated then return default locale", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'], 'en')).toEqual('en')
	});

	test("when asked locale is not in the user's preferred list and no default locale is indicated it should return undefined", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'])).toEqual(undefined)
	});

});