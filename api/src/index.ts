import App from './App';
import Database from './config/Database';

const PORT = process.env.PORT || 8080;

App.listen(PORT, () => {
  Database.connect();
  console.log(`API is running in port ${PORT} - ${new Date().toLocaleString()}`)
});
