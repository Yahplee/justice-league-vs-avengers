const seedAvengers = require('./avengerSeed');
const seedJustice = require('./justiceSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedAvengers();
  console.log('--------------');
  await seedJustice();
  console.log('--------------');
  process.exit(0);
};

seedAll();
