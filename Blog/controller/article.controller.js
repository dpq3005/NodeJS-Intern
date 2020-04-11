const articleService = require('../repository/article.repository');

const updateArticleContentByUser = async (req, res) => {
  const { userId } = req.params;

  return articleService.updateArticleContent(userId);
}