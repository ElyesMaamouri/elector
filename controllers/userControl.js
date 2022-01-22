const User = require("../models/User");

exports.listUser_get = async (req, res) => {
  try {
    console.log(req.query.roles);
    if (req.query.roles) {
      const userWithRole = await User.find({
        $or: [{ roles: req.query.roles }],
      });
      return res.status(200).json({
        message: "List of users with filter",
        success: true,
        user: userWithRole,
      });
    } else {
      const user = User.find();
      return res.status(200).json({
        message: "List of users",
        success: true,
        user: user,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Error list of user" + err,
      success: false,
    });
  }
};
