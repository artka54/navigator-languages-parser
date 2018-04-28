class NavigatorLanguagesParser {

	/**
	 * Get user's preferred languages
	 * @return {array}
	 */
	static _getUsersPreferredLanguages() {
		console.log(navigator.languages)
		return navigator.languages
	}

	/**
	 * @param  {array} acceptedLangs - pass languages that you accept
	 * @param {array} defaultLang - indicate default language to fallback (optional)
	 * @return {boolean}
	 */
	static parseLanguages(acceptedLangs, defaultLang = false) {

		const userPref = this._getUsersPreferredLanguages()

		const match = navigator.languages.find( lang => acceptedLangs.includes(lang) )

		if (match == undefined && defaultLang != false ) {
			return defaultLang
		}

		return match
	}

}

module.exports = NavigatorLanguagesParser