module.exports = (app, pathApi) => {
  const userControl = require("../controllers/userControl");
  app.get(pathApi + "/users", userControl.listUser_get);
  app.delete(pathApi + "/users/:id", userControl.removeUser_delete);
};
