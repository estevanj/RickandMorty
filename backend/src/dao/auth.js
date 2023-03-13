const mongoose = require('mongoose');
const authSchema = require('../models/auth');

authSchema.statics = {
  create: async function (data) {
    const user = new this(data);
    try {
      await user.save();
      return user;
    } catch (error) {
      return null;
    }
  },
  login: async function (query) {
    try {
      return await this.find(query);
    } catch (error) {
      return null;
    }
  }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;