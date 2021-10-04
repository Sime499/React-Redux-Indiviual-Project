'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    

    
    static associate(models) {
    }
  };
  blog.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};