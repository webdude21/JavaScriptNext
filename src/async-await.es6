require("babel-polyfill");

import request from "request";

function get(url) {
  var promise = new Promise((resolve, reject) => {
    request({ method: 'GET', url: url, json: true, }, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });

  return promise;
}

async function printArticles() {
  try {
    var articles = await get('http://meanestblog.herokuapp.com/api/articles');
    articles.forEach(console.log);
    console.log("-----------------------------------------");
    var categories = await get('http://meanestblog.herokuapp.com/api/categories');
    categories.forEach(console.log);
  } catch (e) {
    console.log(e);
  }
}

printArticles();
