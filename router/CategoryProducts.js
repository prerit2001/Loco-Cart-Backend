const express = require("express");
const Product = require("../model/Product.js");
const env = require("dotenv");
const CategoryProductRouter = express.Router();

CategoryProductRouter.get("/:id", (req, res) => {
  const category = req.params.id;
  Product.find({ Category: category }).exec((err, products) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    return res.json({ products });
  });
});

module.exports = CategoryProductRouter;
