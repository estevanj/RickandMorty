const User = require('../dao/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = async (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  }
  const dataUser = await User.create(newUser)

  if (dataUser === null) {
    return res.status(500).send('Server error');
  }

  res.status(200).send({ dataUser });
}

exports.loginUser = async (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }

  const user = await User.findOne({ email: userData.email })
  if (user === null) {
    return res.status(500).send('Server error');
  }
  
  const resultPassword = bcrypt.compareSync(userData.password, user.password);
  if (resultPassword) {
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

    const dataUser = {
      name: user.name,
      email: user.email,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    res.send({ dataUser });
  } else {
    // password wrong
    res.status(409).send({ message: 'Something is wrong' });
  }
}











