import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config({ path: './.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

try {
    await sequelize.authenticate();
    console.log('Connected to database successfully');
} catch (err) {
    console.error('Failed to connect to database:', err);
}

// config({ path: './.env' });

// const db = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// try {
//     await db.connect();
//     console.log("Connected to database successfully");
// } catch (err) {
//     console.error("Failed to connect to database:", err);
// }

export default sequelize;
