import sqlite3 from 'sqlite3';
import MessagesConstants from './constants/messages';


const DATABASE_FILE = process.env.DATABASE_FILE || './database.sqlite';
const db = new sqlite3.Database(DATABASE_FILE, (err: Error | null) => {
  if (err) {
    console.error(MessagesConstants.CONNECT_DATABASE_ERROR.replace('{err}',err.message));
  } else {
    console.log(MessagesConstants.CONNECT_DATABASE.replace('{db}',DATABASE_FILE));
  }
});

export default db;
