const app = require('./app');
var request = require('request-promise');

let PORT = process.env.PORT || 8080;
let API_URI = 'http://localhost:' + PORT;

test('forcing error', () => {
    expect(true).toBe(false);
});
