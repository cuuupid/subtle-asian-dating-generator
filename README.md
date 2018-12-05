# SAD NN

Objective: scrape subtle asian dating and make a bot that can generate posts. :fist: :eggplant: :sweat_drops:

ArE yOu aN ABg lOOkiNg fOr a 7'2" BoBA raVe bOdYbUilDeR tHaT dOEs iNVesTmENt bAnKIng dURInG tHE daY?????

WaNt tO make aN enGagiNg bIO????

LOOK NO FURTHER!!!!!!!!!!!!!!!!!


## Scraping the data

Go to FB, `subtle asian dating` group; open dev console (right click, inspect element, click the console tab).

There's some BS warning from FB, it's not 大鸡鸡 energy so we basically ignore it. Type `console.clear()` to make it go away (you have to press <kbd>Enter</kbd> after commands :clap:)

Next scroll way down. We only want 6'+ so scroll at least 6' down.

Put in the commands in `scrape.js`, it takes a bit to load (it's going to click all the "See More" tags, then scrape everything into `posts`, then download it all as a `JSON` file, because as described `JSON` is universal ABG format, if you don't believe me check Wikipedia).
