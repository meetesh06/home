const fs = require('fs');

// Handle Posts
const getProcessed = (s) => {
  return s.substring(4,s.length-3).trim()
}

let idx = 0

const postsPath = __dirname + "/posts";
const categoriesDirs = fs.readdirSync(postsPath, {withFileTypes: true})

const directoriesInDIrectory = categoriesDirs
  .filter((item) => item.isDirectory())
  .map((item) => item.name);


const res = {}
res["categories"] = new Set()
res["posts"] = []
res["secrets"] = []

directoriesInDIrectory.forEach((currCat) => {
  const categoryPosts = fs.readdirSync(postsPath + "/" + currCat, { withFileTypes: true });
  
  const postsInCategory = categoryPosts
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

  postsInCategory.forEach((currPostPath) => {
    const postFile = fs.readFileSync(postsPath + "/" + currCat + "/" + currPostPath)
    const postData = postFile.toString().split("\n")
    const title = getProcessed(postData[0])
    const category = getProcessed(postData[1])
    const lineage = getProcessed(postData[2])
    const description = getProcessed(postData[3])
    const created = getProcessed(postData[4])

    postData.splice(0,5);
    const currPost = {
      "id": title.replace(/[^A-Z0-9]/ig, "+"),
      category,
      lineage,
      title,
      description,
      created,
      link: currCat + "/" + currPostPath,
      postText: postData.join('\n').toString(),
      backup: ""
    }

    res["categories"].add(category)
    res["posts"].push(currPost)
  })

})

res["categories"] = [...res["categories"]]

console.log(`Generated ${res.posts.length} posts, ${res.categories.length} categories`);

fs.writeFile("gghb/src/blogPostsData.json", JSON.stringify(res), function(err) {
  if (err) {
    console.log(err);
  }
});

// Handle Pages

// 1. Remove old pages
const oldPagesDir = __dirname + "/gghb/src/pages";
const protected = ["_app.js", "_document.js", "404.js"];
const oldPages = fs.readdirSync(oldPagesDir, { withFileTypes: true });
const listOfOldPages = oldPages
  .filter((item) => !item.isDirectory() && !protected.includes(item.name))
  .map((item) => item.name);



listOfOldPages.forEach((f) => fs.unlinkSync(oldPagesDir + "/" + f))

// 2. Copy new pages
const pagesDir = __dirname + "/pages";
const allPages = fs.readdirSync(pagesDir, { withFileTypes: true });
const listOfPages = allPages
  .filter((item) => {   return !item.isDirectory();})
  .map((item) => item.name);


const pagesData = { pages: [] }

// ref: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

listOfPages.forEach((f) => {
  if (f == "index.js") {
    pagesData.pages.push(["Home","/", false])
  } else {
    pagesData.pages.push([f.split(".")[0].capitalize(),"/" + f.split(".")[0], false])
  }
  fs.copyFileSync(pagesDir + "/" + f, oldPagesDir + "/" + f);
})

pagesData.pages.push(["Blog", "/blog", res["posts"].length == 0])

fs.writeFile("gghb/src/pagesData.json", JSON.stringify(pagesData), function(err) {
  if (err) {
    console.log(err);
  }
});