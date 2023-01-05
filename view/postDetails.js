const postDetails = (post, callback) => {
  const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class='news-list'>
          <header><img src="/logo.png"/>Wizard News</header>
          <div class='news-item'>
            <p>${ post.title }</p>
            <p>${ post.content }</p>
            <p>${ post.name }</p>
            <p>${ callback(post.date) }</p>
            <br />
            <a class='home-link' href='/' >Home</a>
          </div>
        </div>
      </body>
    </html>
    `
    return html;
}

const noPostFound = () => {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <header><img src="/logo.png"/>Wizard News</header>
        <div class="not-found">
          <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
          <img src="/dumbledore-404.gif" />
        </div>
      </body>
    </html>
    `
    return html;
}

module.exports = { postDetails: postDetails, noPostFound: noPostFound };