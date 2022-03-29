const db = require('./model');

function getJson(req, res) {
    res.json(db);
}

function postJson(req, res) {
    db.push(req.body);
    console.log(db)
    res.json({
        'response': 'data saved',
        'db': db,
    })
}

function putJson(req, res) {
    db[req.body.id] = req.body.data;
    res.json({
        'response': 'data updated',
        'db': db,
    })
}

function deleteJson(req, res) {
    console.log(req.params.id);
    db.splice(req.params.id - 1, 1);
    res.json({
        'response': 'data deleted',
        'db': db,
    })
}


module.exports = {
    getJson,
    postJson,
    putJson,
    deleteJson,
}