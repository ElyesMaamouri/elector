const User = require("../models/User");
const bcrypt = require("bcryptjs");
exports.signup_post = async (req, res) => {
  try {
    const user = await User.findOne({ cinId: req.body.cinId });
    console.log(user);
    if (user) {
      return res.status(200).send({
        message: "Sorry! User exisite",
        success: false,
      });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 12);
    // const newUser = {
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   password: cryptedPassword,
    //   cinId: req.body.cinId,
    // };

    await User.create(req.body);
    return res.status(201).json({
      message: "Your account has been successfully created",
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Error occurred register" + err,
      success: false,
    });
  }
};
