module.exports = {

    sayHello: (req, res, next) => {

        var obj = {
            status: 200,
            msg: 'hello ' + req.params.name
        };

        res.send(obj);
        next();
    }

}