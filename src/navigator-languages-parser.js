class NavigatorLanguagesParser {

	/**
	 * Get user's preferred languages
	 * @return {array}
	 */
	static _getUsersPreferredLanguages() {

		if (navigator.languages !== undefined) {
			return navigator.languages
		} else {
			return [navigator.language]
		} // create else for final fallback, and also create a test for it

	}

	/**
	 * @param  {array} acceptedLangs - pass languages that you accept
	 * @param {array} defaultLang - indicate default language to fallback (optional)
	 * @return {string} - suitable locale (the one that matches the user preferred or default)
	 */
	static parseLanguages(acceptedLangs, defaultLang = false) {

		const userPref = this._getUsersPreferredLanguages()

		const match = userPref.find( lang => acceptedLangs.includes(lang) )

		if (match == undefined && defaultLang != false ) {
			return defaultLang
		}

		return match
	}

}

module.exports = NavigatorLanguagesParser