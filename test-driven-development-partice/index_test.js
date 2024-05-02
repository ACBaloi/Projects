const index = require('./index');
const assert = require('assert');

 module.exports = describe('Phrase', () => {
    describe('.initials', () => {
        it('returns the first letter of each word in a phrase.', () => {
            //Setup
            const inputName = 'Nelson Mandela';
            const expectedInitials= 'NM';
            //Exercise
            const result = Phrase.initials(inputName);
            //Verification
            assert.strictEqual(result, expectedInitials);
        });
    });
})
