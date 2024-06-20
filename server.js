const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/Database');

// Load environment variables from config.env file
dotenv.config({ path: './config/config.env' });

// Connecting database
connectDatabase();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
