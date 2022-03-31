const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store); 

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now listening'));
 });

 // 1. 
 // 2. edit post page allows you to edit title but not content
 // 3. Doesn't display the post title on the homepage, single-post, or the dashboard
 // 4. maybe just tell em to download and not use heroku
 // 5. Need to update the Put route for single post.  Getting NaN on the edit-post page
 // 6. The edit post page doesn't allow you to change the title of the post
 // 7. The edit post page 