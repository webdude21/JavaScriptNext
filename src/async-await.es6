require("babel-polyfill");

import request from "request";

function get(url) {
  var promise = new Promise((resolve, reject) => {
    request({ method: 'GET', url, json: true }, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        if (resp.statusCode !== 200) {
          reject(resp.statusCode)
        } else {
          resolve(body);
        }
      }
    });
  });

  return promise;
}

async function printArticlesAndCategories() {
  try {
    var articles = await get('http://meanestblog.herokuapp.com/api/articles');
    articles.forEach(console.log);
    console.log("-----------------------------------------");
    var categories = await get('http://meanestblog.herokuapp.com/api/categofries');
    categories.forEach(console.log);
  } catch (e) {
    throw new Error(e);
  }
}

// Error is not caught
try {
  var result = printArticlesAndCategories();
} catch (e) {
  console.log(e);
}

// a hack to catch an error
(async function () {
  try {
    var result = await printArticlesAndCategories();
  } catch (e) {
    console.log(e);
  }
}())
