# navigator-languages-parser

Parses the navigator.languages (user's preffered languages) array against the accepted languages (languages defined in app) and returns the match.

### Installation


```bash
npm install navigator-languages-parser
```


### Usage

**This package is inteded to be used in client side code as it parses the 'navigator' object that is supplied by the browser. This package won't work on the server side.**

1. Import or require (hello nodejs) the script in your App (e.g react or vue app)
2. Make custom logic
3. Bundle the javascript e.g with webpack
4. Include it in html so this module faces client's browser and enjoy

```javascript
import NavigatorLanguagesParser from "navigator-languages-parser"

NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'de'], 'en')
```

* The module takes the order of priority of languages from the navigator.languages when checking against your given array of languages.
* The module currently does not support loose matching, e.g 'en' won't be matched to 'en-US' and vice versa.
* The module has a fallback in case the client's browser does not support navigator.languages, it either tries to use a slightly different object - navigator.language or in case it is not defined as well the module then returns undefined.

### API

#### NavigatorLanguagesParser.parseLanguages(Array acceptedLangs, String defaultLang [optional])

We indicate the languages that we want to be checked against the languages set as user's preferred. We also set the default fallback language to 'en' in case user has not preferred any of the languages we check against but we still need to decide on one language.

```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'de'], 'en')

console.log(match)

// output if user's navigator.languages array in browser contains 'en' as a preferred language
'en'

// output if user's navigator.languages array in browser does not contain any of our accepted languages as a preferred language
'en' // because default fallback language 'en' has been indicated
```



#### NavigatorLanguagesParser.parseLanguages(Array acceptedLangs)

We indicate languages to be checked against user's preferred without indicating a default one.
You can use this if you do not need default language or you want to implement your own logic when no language is matched.

```javascript
const match = NavigatorLanguagesParser.parseLanguages(['en', 'ko', 'es'])

console.log(match)

undefined // if user's preffered languages does not contain those listed by us and there is no default fallback language indicated

ko // if user's preffered languages contains ko

```



## Running the tests

```bash
npm test
```

## Authors

Arturs "artka54" Kalnins

## License

This project is licensed under the MIT License 