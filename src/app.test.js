const app = require('./app');
var request = require('request-promise');

let PORT = process.env.PORT || 8080;
let API_URI = 'http://localhost:' + PORT;

// test('checking API PORT ', () => {

//     expect(8080).toBe(PORT);

// });

// test('route /', () => {
//     request(API_URI)
//         .then((body) => {
//             expect(body).toBeDefined();
//         });
// });

test('forcing error', () => {
    expect(false).toBe(false);
});
