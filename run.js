/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer", 
    alicia: "accountant"
};

let {mike, jill, alicia} = jobs; 
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;//----Native being the first or '0' in the array
console.log(johnNative, johnSecondary)

let [,,maryNative, marySecondary] = languages; //----Two comma's to skip the first two options
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: "english",
    secondLangauge: "french", 
    thirdLangauge:  "german", 
    fourthLangauge: "japanese",
};

let {firstLanguage, thirdLangauge } = languages2;
console.log(firstLanguage, thirdLangauge);


// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits; //----Can use differnet names for rest as long as there is '...' at the start.
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {brain, anna, ...rest} = favoriteFoods;
console.log(brain);
console.log(anna);
console.log(rest);
