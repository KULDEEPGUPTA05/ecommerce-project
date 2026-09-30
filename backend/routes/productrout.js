const { productcontroller ,productcontrollersingledata} = require("../controller/productcontroller");
const product_route = require("express").Router();
product_route.get("/productlist", productcontroller);
product_route.get("/productlist/:id", productcontrollersingledata);
module.exports = {product_route};
