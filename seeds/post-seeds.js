const { Post } = require('../models');

const postdata = [
  {
    title: 'Spoons',
    post_url: 'https://techcrunch.com/',
    user_id: 10
  },
  {
    title: 'Massive',
    post_url: 'https://techcrunch.com/2022/03/21/nasas-ingenuity-helicopter-will-keep-flying-on-mars-through-at-least-september/',
    user_id: 8
  },
  {
    title: 'Abra',
    post_url: 'https://techcrunch.com/2022/03/21/cadillac-begins-production-of-lyriq-crossovers-the-gm-luxury-brands-first-ev/',
    user_id: 1
  },
  {
    title: 'Kadabra',
    post_url: 'https://techcrunch.com/pages/podcasts/',
    user_id: 4
  },
  {
    title: 'Alakazam',
    post_url: 'https://techcrunch.com/startups/',
    user_id: 7
  },
  {
    title: 'Machines',
    post_url: 'https://techcrunch.com/video/',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;