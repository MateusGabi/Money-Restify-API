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

        var query = req.query   ;

        var value = query.value || 0;
        var from = query.from || 'BRL';
        var to = query.to || 'USD';
        var uri = 'http://api.fixer.io/latest?base=' + from + '&symbols=' + to;

        rp(uri)
        .then(body => {

            var objResponse = JSON.parse(body);

            var rate = objResponse.rates[to];

            var val = value * rate;

            //---- rounding value to a decimal
            val = val * 100;
            val = Math.round(val);
            val = val / 100;


            var obj = {
                'value': val,
                'rate': rate,
                'fixer': objResponse
            };

            res.send(obj);

            next();
        })
        .catch(err => {
            
            console.log(query);

            res.send({
                status: 500,
                message: 'Something strange happened'
            });
            next();
        });
    }

}