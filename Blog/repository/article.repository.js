const model = require('../model/Articles');

const updateArticleContent = (user) => {
  const articleUpdated = model.findOneandUpdate({ userID: user });

  return articleUpdated;
}

module.exports = {
  updateArticleContent
}