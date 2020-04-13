const articleRespository = require('../repository/article.repository');

const updateArticleContentByUser = async (req, res) => {
  const { userId } = req.params;

  return articleRespository.updateArticleContent(userId);
}

module.exports = { updateArticleContentByUser };