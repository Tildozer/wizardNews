const express = require("express");
const app = express();
const postBank = require('./postBank');
const postList = require('./view/postList.js');
const timeAgo = require('node-time-ago');

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
const postDetails = require("./view/postDetails");
app.use(bodyParser.json());

app.use(express.static('public'));
// console.log(postBank.list())

app.get('/',(req,res)=>{
  const posts = postBank.list();

  res.send(postList.viewPosts(posts, timeAgo));
})

app.get( '/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id) {
    res.status(404);
    res.send(postDetails.noPostFound());
  } else {
    res.send(postDetails.postDetails(post, timeAgo));
  }
  })


const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
