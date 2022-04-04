const db = require('./model');

function getJson(req, res) {
    const user = getUser(req.body.token);
    if (user) {
        return res.json({
            'username': user.username,
            'data': user.data,
        })
    }

    res.json({
        'response': 'first login',
    })

}

function postJson(req, res) {

    const user = getUser(req.body.token);
    if (user) {
        user.data.push(req.body.data);
        return res.json({
            'response': 'data saved',
            'username': user.username,
            'data': user.data,
        })
    }

    res.json({
        'response': 'first login',
    })
}

function putJson(req, res) {

    const user = getUser(req.body.token);
    if (user) {
        user.data[req.body.data['id'] - 1] = req.body.data;
        return res.json({
            'response': 'data updated',
            'username': user.username,
            'data': user.data,
        })
    }

    res.json({
        'response': 'first login',
    })
}

function deleteJson(req, res) {
    console.log(req.body.id)
    const user = getUser(req.body.token);
    if (user) {
        console.log(req.body.id);
        user.data.splice(req.body.id - 1, 1);
        return res.json({
            'response': 'data deleted',
            'username': user.username,
            'data': user.data,
        })
    }

    res.json({
        'response': 'first login',
    })
}

function signup(req, res) {

    let user = req.body;
    user.token = '';
    user.data = [{
        'id': '1',
        'task': '',
        'status': ''
    }];

    db.push(user);

    res.json({
        'response': 'user created successfully',
        'user': db,
    })
}

function login(req, res) {

    db.forEach((item) => {
        if (item.username === req.body.username && item.password === req.body.password) {
            const token = createToken(60);
            item.token = token;
            return res.json({
                'response': 'loggin successfully',
                'token': token,
            });
        }
    })

    res.json({
        'response': 'user not found',
    })

}

function createToken(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function getUser(token) {
    return db.find(item => item.token === token);
}

module.exports = {
    getJson,
    postJson,
    putJson,
    deleteJson,
    signup,
    login,
}