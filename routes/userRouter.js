var express = require("express");
var router = express.Router();

var UserDao = require("../dao/user");

// Public
// GET Single item based on ID
router.get("/user/:address", async (req, res, next) => {
  const address = req.params.address;
  try {
    const data = await UserDao.getItemById(address);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});

// Public
// GET All Items based on category
router.get("/user", async (req, res, next) => {
  try {
    const data = await UserDao.getItems();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});
// Public
// GET All Items based on category
router.get("/test", async (req, res, next) => {
  try {
    return res.status(200).send("Working");
  } catch (error) {
    return res.status(400).send("error");
  }
});

// Public
// POST a new user email
router.post("/user", async (req, res, next) => {
  const address = req.body.address;
  const email = req.body.email;

  try {
    const data = await UserDao.createUser(address, email);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// DELETE items based on category
router.delete("/user", async (req, res, next) => {
  try {
    const data = await FlashSaleDao.deleteItem();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});
module.exports = router;
