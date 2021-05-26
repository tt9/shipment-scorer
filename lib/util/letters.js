
const rxVowels = /[^aeiou]/gmi;
const rxConsonants = /[^bcdfghjklmnpqrstvwxyz]/gmi;

function vowelCount(str) {
    return str.replace(rxVowels, "").length;
}

function consonantsCount(str) {
    return str.replace(rxConsonants, "").length;
}

module.exports = {
    vowelCount,
    consonantsCount
}