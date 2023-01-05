const express = require("express");
const app = express();
const postBank = require('./postBank')
// console.log(postBank.list())

app.get('/',(req,res)=>{
  const posts = postBank.list()
  const html = `<!DOCTYPE html>
  <html>
  <head>
  <title>Wizard News</title>
  </head>
  <body>
  <ul>
  ${posts.map(post => `<li><p>${post.title}</p><p>${post.name}</p></li>`).join('')}
  </ul>
  </body>
  </html>
  `




  res.send(html)

})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
