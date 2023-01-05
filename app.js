const express = require("express");
const app = express();
const postBank = require('./postBank')
app.use(express.static('public'))
// console.log(postBank.list())

app.get('/',(req,res)=>{
  const posts = postBank.list()
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`
  
res.send(html)
})
app.get( '/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send('hello world')
})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
