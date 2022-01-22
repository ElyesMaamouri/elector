module.exports = (app, pathApi) => {
  const userControl = require("../controllers/userControl");
  app.get(
    pathApi + "/users",

    userControl.listUser_get
  );
};
