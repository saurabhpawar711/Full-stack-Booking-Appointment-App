const User = require('../model/User');

exports.addUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const date = req.body.date;
    const time = req.body.time;

    const data = await User.create({ name: name, email: email, number: number, date: date, time: time });
    res.status(201).json({ newUserDetails: data })
}

exports.getUser = async (req, res, next) => {
    try {
        const userData = await User.findAll();
        res.status(202).json({allUsers: userData});
    }
    catch (err) {
        console.log(err);
    };
}

exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.destroy({where: {id: id}});
        res.status(201);
    }
    catch (err) {
        console.log(err);
    }
}