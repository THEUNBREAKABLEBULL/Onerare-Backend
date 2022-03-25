var UserModel = require("../models/user");

const limit = 15;

const userDao = {
  async getItemById(address) {
    return await UserModel.findOne({ address: address });
  },

  async getItems() {
    return await UserModel.find({});
  },

  async createUser(address, email) {
    let userCount = await UserModel.find({
      address: address,
    }).countDocuments();

    let userData = {
      address: address,
      email: email,
    };

    if (userCount === 0) {
      await UserModel.insertMany([userData]);
    } else {
      await UserModel.findOneAndUpdate({ address: address }, { email: email });
    }

    return await UserModel.findOne({ address: userData.address });
  },

  async deleteItem() {
    await UserModel.deleteMany({});
    return await FlashSaleModel.find({});
  },
};

module.exports = userDao;
