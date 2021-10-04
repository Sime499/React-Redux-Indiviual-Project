const express = require("express");
const models = require("./models");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
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
  //save a product
  blog.save().then(saved => {
    res.json({ sucess: true, blogID: savedblog.id });
  });
});

app.listen(3080, (req, res) => {
  console.log("server is running..");
});