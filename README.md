# Money Restify API

A simple web Currency Converter API in Json format developed using Restify and NodeJS.

# Routes

| Route | Method | Params          | Description                                                                                                                                  |
|-------|--------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| /     | GET    | No.             | Show the latest exchange reference rates.                                                                                                    |
| /go   | GET    | value, from, to | Convert a *value* *from* one currency *to* another. *Value* should be in double format (eg: 123.45). *From* and *To* should be one currency of the list. |

## Examples

You can install a global dependency called json.

`npm install -g json`

### Example 1

`curl -isS http://127.0.0.1:8080 | json`

```
{
  "base": "EUR",
  "date": "2017-10-05",
  "rates": {
    "AUD": 1.5015,
    "BGN": 1.9558,
    "BRL": 3.6772,
    "CAD": 1.4655,
    "CHF": 1.1472,
    "CNY": 7.8108,
    "CZK": 25.837,
    "DKK": 7.4424,
    "GBP": 0.89153,
    "HKD": 9.1701,
    "HRK": 7.5055,
    "HUF": 311.42,
    "IDR": 15803,
    "ILS": 4.1229,
    "INR": 76.496,
    "JPY": 132.05,
    "KRW": 1337.6,
    "MXN": 21.411,
    "MYR": 4.9651,
    "NOK": 9.35,
    "NZD": 1.6413,
    "PHP": 59.949,
    "PLN": 4.3,
    "RON": 4.575,
    "RUB": 67.527,
    "SEK": 9.5195,
    "SGD": 1.5998,
    "THB": 39.16,
    "TRY": 4.1905,
    "USD": 1.1742,
    "ZAR": 16.002
  }
}

```

### Example 2

`curl -isS http://127.0.0.1:8080/go?value=123.45&from=BRL&to=USD`

```
{
    "value": 39.42,
    "rate": 0.31932,
    "updated_in": "2017-10-05"
}
```