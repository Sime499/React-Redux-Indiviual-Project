
const express = require("express");
const models = require("./models");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urllencoded())

app.get('/', (req, res) => {
  res.send("product");
});

app.get("/blog", (req, res) => {
  models.blog.findAll({}).then(blogs => {
    res.json(blogs);
  });
});

app.post("/api/blog", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageurl = req.body.imageUrl;

  const blog = models.blog.build({
    title: title,
    description: description,
    imageURL: imageURL,
  });

  blog.save().then(saved => {
    res.json({ sucess: true, blogID: savedblog.id });
  });
});

app.listen(port, () => console.log(` listening on port `));
