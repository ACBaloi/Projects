const test = require('./index_test');

const Phrase = {
    initials(inputName){
        //Create an empty array for initials
        const initials = [];
        //Create an array od strings
        const words = inputName.split('');
        // Interate through the array of strings and push the first character of each to array
        words.array.forEach(element => {
            initials.push(element.charAt(0));
        });
        //Return the initials as on string
        return initials.join('');

    }
}

module.exports = Phrase;