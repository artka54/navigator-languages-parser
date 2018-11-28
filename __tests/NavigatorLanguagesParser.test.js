const NavigatorLanguagesParser = require( "../dist/bundle.js");

const setUserPreferredlanguages = (preferredlanguages) => {
	Object.defineProperty(window.navigator, 'languages', {value: preferredlanguages, configurable: true})
}

const setUserPreferredlanguagesFallback = (preferredlanguage) => {
	Object.defineProperty(window.navigator, 'language', {value: preferredlanguage, configurable: true})
}

describe("Matching languages to user's preffered languages", () => {

	beforeEach(() => {
	   setUserPreferredlanguages(['en-US', 'en']);
	});

	test("if language matches against user's preferred languages", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['en'])).toEqual('en')
	});

	test("if language matches against user's preferred languages if when app's defined languages are more than one", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de', 'en-US', 'es'])).toEqual('en-US')
	});

	test("when language is not in the user's preferred list but default language is indicated then return default language", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de', 'es'], 'de')).toEqual('de')
	});

	test("when app's defined language is not in the user's preferred list and no default language is indicated it should return undefined", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'])).toEqual(undefined)
	});

});


describe("Matching languages to user's preffered languages. Using fallback -> navigator.language instead of navigator.languages", () => {

	beforeEach(() => {
	   setUserPreferredlanguages(undefined)
	   setUserPreferredlanguagesFallback('ko')
	});

	test("if language matches against user's preferred languages", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko'])).toEqual('ko')
	});

	test("if language matches against user's preferred languages when when app's defined anguages are more than one", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko', 'en-US', 'es'])).toEqual('ko')
	});

	test("when language is not in the user's preferred list but default language is indicated then return default language", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de', 'en'], 'de')).toEqual('de')
	});

	test("when app's defined language is not in the user's preferred list and no default language is indicated it should return undefined", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['de'])).toEqual(undefined)
	});

});


describe("Test when browser does not support neither navigator.languages or navigator.language", () => {

	beforeEach(() => {
	   setUserPreferredlanguages(undefined)
	   setUserPreferredlanguagesFallback(undefined)
	});

	test("if fallback works when browser lacks support and no default language is indicated", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko', 'en'])).toEqual(undefined)
	});

	test("if fallback works when browser lacks support and default language is indicated", () => {
	  expect(NavigatorLanguagesParser.parseLanguages(['ko', 'en'], 'ko')).toEqual('ko')
	});

});


// describe if neither navigator.languages or navigator.language does not wor
