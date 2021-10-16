'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      googleBooksId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Review',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
