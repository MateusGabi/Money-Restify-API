var rp = require('request-promise');

module.exports = {

    showLatest: (req, res, next) => {

        rp('http://api.fixer.io/latest')
            .then(body => {
                res.send(JSON.parse(body));
                next();
            })
            .catch(err => {
                res.send({
                    status: 500,
                    message: 'Something strange happened'
                });
                next();
            });        
    },


    fixer: (req, res, next) => {

        var query = req.query;

        var value = query.value || 0;
        var from = query.from || 'BRL';
        var to = query.to || 'USD';
        var uri = 'http://api.fixer.io/latest?base=' + from;

        rp(uri)
        .then(body => {

            var objResponse = JSON.parse(body);

            var rate = objResponse.rates[to];

            var obj = {};
        

            if(rate) {

                var val = value * rate;

                //---- rounding value to a decimal
                val = val * 100;
                val = Math.round(val);
                val = val / 100;


                obj = {
                    'value': val,
                    'rate': rate,
                    'updated_in': objResponse.date
                };
            }
            else {
                obj = {
                    message : 'Currency is not avaible.'
                };

                res.status(500);
            }

            res.send(obj);

            next();
        })
        .catch(err => {
            
            console.log(query);

            res.send(500, {
                message: 'Currency is not avaible.'
            });
            next();
        });
    }

}