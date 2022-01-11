// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBunnies } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const family = {
        name: 'pizza'
    };
    const expected = renderBunnies(family);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = '<div><p class="family">pizza</p></div>';

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected.outerHTML);
});
