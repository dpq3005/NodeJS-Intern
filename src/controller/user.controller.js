const userService = require('./../service/user.service')

const userCreateController = async (request, h) => {
  const { name, password } = request.payload;
  // const alreadyNamed = userService.findUser(name);

  // console.log(alreadyNamed);

  // if (alreadyNamed) {
  //   return 'Please choose another name';
  // }

  return await userService.createUser({
    name, password
  });
}

const userListController = async (request, h) => {
  return await userService.listUser();
}

const signInController = async (request, h) => {
  const { name, password } = request.payload;
  const nameCheck = User.findOne(name);

  if (!nameCheck) {
    return 'Wrong name';
  }
  if (nameCheck) {
    if (password !== nameCheck.password) {
      return 'Wrong password';
    }
  }
  return nameCheck;
}

module.exports = { userCreateController, userListController, signInController };
