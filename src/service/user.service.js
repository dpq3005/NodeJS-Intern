const { create, list, find } = require('./../model/user');

const createUser = async (name, password) => {
  try {
    const user = await create({
      name, password
    });

    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const findUser = async (name) => {
  try {
    const user = await find(name);

    if (user) {
      return user;
    }
  }
  catch (err) {
    console.log(err);
    throw err;
  }
}

const listUser = async () => {
  return await list();
}


module.exports = {
  createUser, listUser, findUser
};
