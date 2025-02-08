const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const db = require('../config/db');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

exports.registerUser = async (req, res) => {
  const { name, phone, email, password, gender, location } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    await userModel.registerUser(name, phone, email, hashedPassword, gender, location);

    const user = await new Promise((resolve, reject) => {
      userModel.getUserByEmail(email, (err, user) => {
        if (err || !user) reject("User not found");
        else resolve(user);
      });
    });

    req.session.user = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      gender: user.gender,
      location: user.location,
      role: user.role || 'user'
    };

    await new Promise((resolve, reject) => {
      req.session.save((err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    res.redirect('/');
  } catch (err) {
    res.redirect('/register?error=Registration failed');
  }
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  userModel.getUserByEmail(email, (err, user) => {
    if (err || !user) {
      return res.redirect('/login?error=Invalid credentials');
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.redirect('/login?error=Invalid credentials');
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      phone: user.phone,
    };

    req.session.save((err) => {
      if (err) {
        return res.redirect('/login?error=Session not saved');
      }
      res.redirect('/');
    });
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};