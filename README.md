# navigator-languages-parser

Parses the navigator.languages (user's preffered languages) array against the accepted languages (languages defined in app) and returns the match.

### Installation


```bash
npm install navigator-languages-parser
```


### Usage

```javascript
const NavigatorLanguagesParser = require("./navigator-languages-parser.js")

NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'de'], 'en')
```


### API

#### NavigatorLanguagesParser.parseLanguages(Array acceptedLangs, String defaultLang [optional])

We indicate the languages app can offer to check against the languages set as user's preferred. We also set a default fallback language to 'en' in case user has not preferred any of our apps languages but we still need to decide on one language.

```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'de'], 'en')

console.log(match)

// output if user's navigator.languages in browser contains 'en' as a preferred language
'en'

// output if user's navigator.languages in browser does not contain any of our accepted languages as a preferred language
'en' // because default fallback language 'en' has been indicated
```



```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'es'])

// output if user's navigator.languages in browser does not contain any of our accepted languages as a preferred language
undefined // because thereis no default language indicated


```



## Running the tests

```bash
npm test
```

## Authors

Arturs "artka54" Kalnins

## License

This project is licensed under the MIT License 