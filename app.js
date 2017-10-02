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

        var query = req.getQuery();

        var value = query.value;
        var from = query.from;
        var to = query.to;
        var uri = 'http://api.fixer.io/latest?base=' + from + '&symbols=' + to;

        rp(uri)
        .then(body => {
            res.send(JSON.parse(body));
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