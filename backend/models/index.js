const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// PostgreSQL (ex. Neon) si DATABASE_URL est défini, sinon SQLite local
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
      logging: false
    })
  : new Sequelize({
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

// Liste stockée en JSON. Accepte un tableau, une chaîne JSON, ou du texte
// (une valeur par ligne, ou séparée par des virgules si `separator` vaut ',').
const jsonList = (field, separator = '\n') => ({
  type: DataTypes.TEXT,
  get() {
    const raw = this.getDataValue(field);
    return raw ? JSON.parse(raw) : [];
  },
  set(value) {
    let list = value;
    if (typeof value === 'string') {
      try {
        list = JSON.parse(value);
      } catch {
        list = null;
      }
      if (!Array.isArray(list)) list = value.split(separator === ',' ? ',' : /\n\s*\n|\n/);
    }
    list = (Array.isArray(list) ? list : []).map((v) => String(v).trim()).filter(Boolean);
    this.setDataValue(field, JSON.stringify(list));
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
  features: jsonList('features')
});

const Project = sequelize.define('Project', {
  title: { type: DataTypes.STRING, allowNull: false },
  short: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  tags: jsonList('tags', ','),
  link: { type: DataTypes.STRING },
  position: { type: DataTypes.INTEGER, defaultValue: 0 }
});

const Post = sequelize.define('Post', {
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
  title: { type: DataTypes.STRING, allowNull: false },
  excerpt: { type: DataTypes.TEXT },
  category: { type: DataTypes.STRING },
  date: { type: DataTypes.DATEONLY },
  image: { type: DataTypes.STRING },
  content: jsonList('content')
});

const TeamMember = sequelize.define('TeamMember', {
  name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING },
  bio: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  position: { type: DataTypes.INTEGER, defaultValue: 0 }
});

// Images envoyées depuis l'admin, stockées en base pour survivre aux redémarrages
const Media = sequelize.define('Media', {
  folder: { type: DataTypes.STRING },
  filename: { type: DataTypes.STRING, allowNull: false },
  mimetype: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.BLOB('long'), allowNull: false }
});

module.exports = { sequelize, User, Product, Project, Post, TeamMember, Media };
