const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: false
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  oldPrice: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  badge: {
    type: DataTypes.STRING
  },
  badgeColor: {
    type: DataTypes.STRING
  },
  stock: {
    type: DataTypes.STRING,
    defaultValue: 'En stock'
  },
  warranty: {
    type: DataTypes.STRING
  },
  features: {
    type: DataTypes.TEXT, // Will store JSON string
    get() {
      const rawValue = this.getDataValue('features');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('features', JSON.stringify(value));
    }
  }
});

module.exports = { sequelize, User, Product };
