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

We indicate the languages that we want to be checked against the languages set as user's preferred. We also set a default fallback language to 'en' in case user has not preferred any of the languages we check but we still need to decide on one language.

```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'de'], 'en')

console.log(match)

// output if user's navigator.languages in browser contains 'en' as a preferred language
'en'

// output if user's navigator.languages in browser does not contain any of our accepted languages as a preferred language
'en' // because default fallback language 'en' has been indicated
```


We indicate languages to be checked against user's preferred without indicating a default one.
You can use this if you do not need default language or you want to implement your own logic when no language is matched.
```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'es'])

console.log(match)

undefined // because there is no default language indicated


```



## Running the tests

```bash
npm test
```

## Authors

Arturs "artka54" Kalnins

## License

This project is licensed under the MIT License 