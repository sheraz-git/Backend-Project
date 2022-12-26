const jwt = require("jsonwebtoken");
const user = require("./../Model/model");

exports.login = (req, res) => {
  let data = req.body;
  let email = data.email;
  let password = data.password;
  let typecast = data.typecast;

  if (
    email === "adminabc@gmail.com" &&
    password === "admin123" &&
    typecast === "admin"
  ) {
    const token = jwt.sign({ typecast: "admin" }, "hello");
    return res.status(200).json({
      message: "yes you can login",
      token,
    });
  } else {
    return res.status(200).json({
      message: "NO you cannot login",
    });
  }
};

exports.signup = async (req, res) => {
  let data = req.body;
  let name = data.name;
  let email = data.email;
  let password = data.password;
  const newuser = new user({
    name,
    email,
    password,
  });
  await newuser.save();
  return res.status(200).json({
    message: "user added",
  });
};

exports.view = async (req, res) => {
  let data = req.body;
  let email = data.email;
  let password = data.password;
  let typecast = data.typecast;
  if (
    email === "adminabc@gmail.com" &&
    password === "admin123" &&
    typecast === "admin"
  ) {
    const vari = await user.find();
    return res.status(200).json({
      vari,
    });
  } else {
    const vari = await user.findOne({ password: password });
    return res.status(200).json({
      vari,
      message: "yes",
    });
  }
};
