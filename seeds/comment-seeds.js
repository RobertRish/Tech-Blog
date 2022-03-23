const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Like and subscribe!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Im not going to see Morbius',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'tech tech tech',
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;